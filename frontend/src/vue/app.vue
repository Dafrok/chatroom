<template lang="jade">
section.app
    login(v-if="!token")
    chatroom(v-if="token")
</template>

<style lang="stylus">
</style>

<script>
import Login from './login.vue'
import Chatroom from './chatroom.vue'
import AppStore from '../store/app.js'
export default {
    components: {
        login: Login,
        chatroom: Chatroom
    },
    computed: {
        token () {
            return AppStore.state.token
        }
    }
}
</script>
