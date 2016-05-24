<template lang="jade">
section.messages
    ul
        li(v-for="message in messages")
            span(v-text="message")
</template>

<style lang="stylus" scoped>
.messages
    position absolute
    top 0
    right 0
    bottom 0
    left 200px
    ul
        margin 0
        padding 0
        li
            list-style none
</style>

<script>
import ChatStore from '../store/chat.js'
export default {
    computed: {
        messages () {
            return ChatStore.state.messages
        }
    }
}
</script>
