import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    users: [],
    messages: []
}

const mutations = {
    UPDATEUSERS (state, users) {
        state.users = users
    },
    INSERTMESSAGE (state, message) {
        state.messages.push(message)
    }
}

export default new Vuex.Store({
    state,
    mutations
})
