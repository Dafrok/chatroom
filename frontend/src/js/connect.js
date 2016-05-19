import AppStore from '../store/app.js'
const ws = new WebSocket('ws://localhost:2333')

ws.onmessage = function (e) {
    const data = JSON.parse(e.data)
    console.log(data.event)
    switch (data.event) {
        case 'login_success':
            AppStore.dispatch('LOGIN', data.token)
            break
        case 'login_error':
            break
        default:
            console.log(data)
            break
    }
}

export function login(account) {
  ws.send(JSON.stringify({
    action: 'login',
    account: account
  }))
}

export function send(msg = '', to = null) {
  ws.send(JSON.stringify({
    action: 'message',
    message: msg,
    to: to
  }))
}

export default ws
