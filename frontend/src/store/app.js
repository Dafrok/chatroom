import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    account: '',
    token: ''
}

const mutations = {
    LOGIN (state, account, token) {
        state.account = account
        state.token = token
    }
}

export default new Vuex.Store({
    state,
    mutations
})
