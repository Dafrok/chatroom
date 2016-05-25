<template lang="jade">
section.users
    button(@click="logout") LOGOUT
</template>

<style lang="stylus" scoped>
.users
    position absolute
    top 0
    left 0
    bottom 0
    width 200px
    background white
    border-right 1px solid #eee
</style>

<script>
import AppStore from '../store/app.js'
import {logout} from '../js/connect.js'
export default {
    methods: {
        logout() {
            logout(AppStore.state.account, AppStore.state.token)
        }
    }
}
</script>
