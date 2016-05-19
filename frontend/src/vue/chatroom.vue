<template lang="jade">
section.chatroom
    users
    messages
    message-field
</template>

<style lang="stylus" scoped>
</style>

<script>
import Users from './users.vue'
import Messages from './messages.vue'
import MessageField from './message-field.vue'
export default {
    components: {
        users: Users,
        messages: Messages,
        MessageField: MessageField
    }
}
</script>
