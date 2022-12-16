import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "../../../utils/axios"
import User from "../../../types/User";

interface MyKnownError {
    errorMessage: string
}

interface authState {

    user?: User;
    token?: string;
    isLoading: boolean;
    message?: string;
}

const initialState: authState = {
    user: {
        id:0,
        name: "",
        password: "",
        email: "",
        birth: "",
    },
    token: "",
    isLoading: false,
    message: "",
}

export const registrationUser = createAsyncThunk<authState, User,{rejectValue:MyKnownError}>(
    'auth/registrationUser',
    async (user,thunkApi) => {
        try {
            const {data} = await axios.post('/registration', user)
            if (data.token) {
                window.localStorage.setItem('token', data.token)
            }

            if (!data.success){

                return thunkApi.rejectWithValue((await data.message) as MyKnownError)
            }

            return data
        } catch (e) {
            console.log(e)
        }
    },)

export const loginUser = createAsyncThunk<authState, User,{rejectValue:MyKnownError}>(
    'auth/loginUser',
    async (user,thunkApi) => {
        try {
            const {data} = await axios.post('/login', user)
            if (data.token) {
                window.localStorage.setItem('token', data.token)
            }

            if (!data.success){

                return thunkApi.rejectWithValue((await data.message) as MyKnownError)
            }

            return data
        } catch (e) {
            console.log(e)
        }
    },)

export const getMe = createAsyncThunk<authState>('auth/getMe', async () => {
    try {
        const {data} = await axios.get('/me')
        return data
    } catch (error) {
        console.log(error)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        logout: (state) => {
            state.user = undefined
            state.token = ""
            state.isLoading = false
            state.message = ""
        },
    },

    extraReducers: (builder)=>{

        //Registration
        builder.addCase(registrationUser.pending, (state)=>{
            state.isLoading = true
        })
        builder.addCase(registrationUser.fulfilled, (state, {payload})=>{
            state.isLoading = false
            state.message = payload.message
            state.user = payload.user
            state.token = payload.token
        })
        builder.addCase(registrationUser.rejected, (state, action)=>{
            state.message = action.payload?.errorMessage
            state.isLoading = false
        })

        //Login User
        builder.addCase(loginUser.pending, (state)=>{
            state.isLoading = true
        })
        builder.addCase(loginUser.fulfilled, (state, {payload})=>{
            state.isLoading = false
            state.message = payload.message
            state.user = payload.user
            state.token = payload.token
        })
        builder.addCase(loginUser.rejected, (state, action)=>{
            state.message = action.payload?.errorMessage
            state.isLoading = false
        })

        //GetMe
        builder.addCase(getMe.pending, (state)=>{
            state.isLoading = true
            state.message = ""
        })
        builder.addCase(getMe.fulfilled, (state, {payload})=>{
            state.isLoading = false
            state.message = payload.message
            state.user = payload.user
            state.token = payload.token
        })
        builder.addCase(getMe.rejected, (state, action)=>{
            state.isLoading = false
        })
    }

})

// export const checkIsAuth = (state:authState) => Boolean(state.auth.token)

export const {logout} = authSlice.actions
export default authSlice.reducer