<template lang="jade">
section.login
    h2 Login
    form(@submit.prevent="login")
        div.account
            input(placeholder="Please enter your name.", v-model="account")
        div.go
            button Go
</template>

<style lang="stylus" scoped>
.login
    padding 20px
    background white
    position absolute
    box-shadow 0 0 3px silver
    top 50%
    left 50%
    transform translate(-50%, -50%)
    white-space nowrap
    h2
        padding 0
        margin 0 0 10px 0
    div
        display inline-block
        height 34px
        line-height 24px
        overflow hidden
    .account
        border 1px solid #ddd
    .go
        border 1px solid #3366cc
    input, button
        padding 5px 10px
        line-height 24px
        outline 0
        border 0
        background transparent
        font-size 16px
    input
        width 200px
    button
        width 80px
        background #3366cc
        color white
        &:hover
            background darken(#3366cc, 10)

</style>

<script>
import {login} from '../js/connect.js'
export default {
    data () {
        return {
            account: ''
        }
    },
    methods: {
        login () {
            login(this.account)
        }
    }
}
</script>
