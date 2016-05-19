import ws, {login, send} from './connect.js'
import Vue from 'vue'
import App from '../vue/app.vue'
new Vue({
    el: 'body',
    components: {
        app: App
    }
})
