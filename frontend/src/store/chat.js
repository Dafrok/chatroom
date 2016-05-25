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
    INSERTMESSAGE (state, messageFrom, message) {
        state.messages.push({
            message: message,
            from: messageFrom
        })
    },
    CLEARHISTORY (state) {
        state.messages = []
    }
}

export default new Vuex.Store({
    state,
    mutations
})
