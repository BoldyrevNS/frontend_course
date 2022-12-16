import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import Server from "../../../types/Server";
import {registrationUser} from "../auth/AuthSlice";
import Category from "../../../types/Category";

interface currentServer {

    id:number,
    countOfUsers:number,
}

interface serverState {

    servers: Server[],
    serverWithUsers:number[],
    currentServers: number[],
    currentCategory: number,
    types: Category[],
    category:number,
    message: string,
    success:boolean,
    isLoading: boolean,
}

const initialState: serverState = {

    servers: [],
    serverWithUsers:[],
    currentServers: [],
    currentCategory: 0,
    types: [],
    category:0,
    message: "",
    success:false,
    isLoading: false,
}

export const getServerByCategory = createAsyncThunk<serverState, number>('servers/getServerByCategory', async (typeId) => {

    try {

        const {data} = await axios.get('/discover/filter', {params: {type: typeId}})

        return data

    } catch (e) {

        console.log(e)
    }
})

export const getServerBySearch = createAsyncThunk<serverState, string>('servers/getServerBySearch', async (searchString) => {

    try {

        const {data} = await axios.get('/discover/search', {params: {name: searchString}})

        console.log(data)

        return data
    } catch (e) {

        console.log(e)
    }
})

export const addUserToServer = createAsyncThunk<serverState, number>('servers/addUserToServer', async (serverId, serverAPI) => {

    try {

        const {data} = await axios.put('/discover', {serverId})

        serverAPI.dispatch(setCurrentServers(serverId))

        return data
    } catch (e) {

        console.log(e)
    }
})

export const getServers = createAsyncThunk<serverState>('servers/getServers', async () => {

    try {

        const {data} = await axios.get('/discover')

        return data
    } catch (e) {

        console.log(e)
    }
})

export const serversSlice = createSlice({

    name: 'servers',
    initialState,
    reducers: {

        setCurrentServers: (state, action) => {

            state.currentServers.includes(action.payload) ?

                state.currentServers.splice(state.currentServers.indexOf(action.payload), 1) :
                state.currentServers.push((action.payload))
        }
    },
    extraReducers: (builder) => {


        //get servers
        builder.addCase(getServers.pending, (state)=>{
            state.isLoading = true
        })
        builder.addCase(getServers.fulfilled, (state, {payload})=>{
            state.isLoading = false

            if (payload.success){

                state.servers = payload.servers
                state.types = payload.types

                payload.servers.forEach(server=>{

                    if (server.currentUser){

                        if ( !state.currentServers.includes(server.id)){
                            state.currentServers.push(server.id)

                        }
                    }
                })
            }
        })
        builder.addCase(getServers.rejected, (state)=>{
            state.isLoading = false
        })

        //get server by search
        builder.addCase(getServerBySearch.pending, (state)=>{
            state.isLoading = true
        })
        builder.addCase(getServerBySearch.fulfilled, (state, {payload})=>{
            state.isLoading = false

            if (payload.success){

                state.servers = payload.servers

                payload.servers.forEach(server=>{
                    if (server.currentUser){

                        if ( !state.currentServers.includes(server.id)){
                           state.currentServers.push(server.id)

                        }

                    }
                })
            }

        })
        builder.addCase(getServerBySearch.rejected, (state)=>{
            state.isLoading = false
        })

        //get server by filter
        builder.addCase(getServerByCategory.pending, (state)=>{
            state.isLoading = true
        })
        builder.addCase(getServerByCategory.fulfilled, (state, {payload})=>{
            state.isLoading = false

            if (payload.success){

                state.servers = payload.servers

                payload.servers.forEach(server=>{
                    if (server.currentUser){

                        if ( !state.currentServers.includes(server.id)){
                            state.currentServers.push(server.id)

                        }

                    }
                })

                if (payload.category) {

                    state.currentCategory = payload.category
                } else {
                    state.currentCategory = 0
                }
            }

        })
        builder.addCase(getServerByCategory.rejected, (state)=>{
            state.isLoading = false
        })

    }

})

export const {setCurrentServers} = serversSlice.actions

export default serversSlice.reducer