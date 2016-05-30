<template lang="jade">
section.users
    header(v-text="`online (${users.length})`")
    //- button(@click="logout") LOGOUT
    ul
        li(v-for="user in users")
            span(v-text="user")

</template>

<style lang="stylus" scoped>
.users
    header
        padding 10px
        background #6699cc
        color white
    position absolute
    top 0
    left 0
    bottom 0
    width 200px
    background white
    border-right 1px solid #eee
    ul
        margin 0
        padding 0
        li
            padding 10px
            list-style none
            border-bottom 1px dotted #f2f2f2
            overflow hidden
</style>

<script>
import AppStore from '../store/app.js'
import ChatStore from '../store/chat.js'
import {logout} from '../js/connect.js'
export default {
    methods: {
        logout() {
            logout(AppStore.state.account, AppStore.state.token)
        }
    },
    computed: {
        users () {
            return ChatStore.state.users
        }
    }
}
</script>
