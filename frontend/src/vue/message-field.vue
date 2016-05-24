<template lang="jade">
form.message-field(@submit.prevent="sendMessage")
    div.editor
        input(v-model="message")
    button SEND
</template>

<style lang="stylus" scoped>
.message-field
    position absolute
    left 200px
    bottom 0
    right 0
    height 40px
    background white
    .editor
        display inline
        position absolute
        left 0
        right 80px
        top 0
        bottom 0
        border-top 1px solid silver
        input
            width 100%
            line-height 40px
            border 0
            padding 0 20px
            background #f5f5f5
            &:focus
                box-shadow 0 0 2px gray inset
                background white
    button
        border 0
        position absolute
        right 0
        width 80px
        top 0
        bottom 0
        background #3366cc
        color white
        &:hover
            background darken(#3366cc, 10)
    input, button
        outline 0
        font-size 16px
</style>

<script>
import ChatStore from '../store/chat.js'
import {send} from '../js/connect.js'
export default {
    data () {
        return {
            message: ''
        }
    },
    methods: {
        sendMessage () {
            send(this.message)
            this.message = ''
        }
    }
}
</script>
