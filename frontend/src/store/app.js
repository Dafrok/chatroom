import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    token: ''
}

const mutations = {
    LOGIN (state, token) {
        state.token = token
    }
}

export default new Vuex.Store({
    state,
    mutations
})
