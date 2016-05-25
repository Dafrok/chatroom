<template lang="jade">
section.messages(@scroll="handleScroll")
    ul
        li(v-for="message in messages" transition="pull")
            span(class="name", v-text="message.from")
            span(class="time", v-text="(new Date).toLocaleString()")
            div(class="message", v-text="message.message")
</template>

<style lang="stylus" scoped>
.pull-transition
    transition .3s all
.pull-enter, .pull-leave
    opacity 0
    /*transform translateY(100%)*/
.messages
    position absolute
    top 0
    right 0
    bottom 40px
    left 200px
    overflow auto
    .name
        font-size 16px
        margin-right 10px
    .time
        font-size 12px
        color gray
    .message
        margin 5px 0
        padding 10px
        background rgba(0, 0, 0, .1)
        font-size 14px
    ul
        margin 0
        padding 0
        li
            padding 10px
            list-style none
</style>

<script>
import ChatStore from '../store/chat.js'
export default {
    data () {
        return {
            autoScroll: true
        }
    },
    methods: {
        handleScroll (e) {
            const height = e.target.clientHeight
            const scrollTop = e.target.scrollTop
            const scrollHeight = e.target.scrollHeight
            if (scrollTop + height === scrollHeight) {
                this.autoScroll = true
            } else {
                this.autoScroll = false
            }
        },
        scrollToEnd () {
            if (this.autoScroll) {
                this.$el.scrollTop = this.$el.scrollHeight - this.$el.clientHeight
            }
        }
    },
    watch: {
        'messages': function () {
            this.scrollToEnd()
        }
    },
    computed: {
        messages () {
            return ChatStore.state.messages
        }
    }
}
</script>
