import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
        state: {
            backendUrl: "http://localhost:8080/"
        },
        getters: {
            getServerUrl: state => {
                return state.backendUrl
            }
        },
        mutations: {},
        actions: {},
        modules: {}
    }
)