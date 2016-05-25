import AppStore from '../store/app.js'
import ChatStore from '../store/chat.js'
const ws = new WebSocket('ws://localhost:2333')

ws.onmessage = function (e) {
    const data = JSON.parse(e.data)
    console.log(data.event, data.message)
    switch (data.event) {
        case 'login_success':
            AppStore.dispatch('LOGIN', data.account, data.token)
            break
        case 'login_error':
            break
        case 'message':
            ChatStore.dispatch('INSERTMESSAGE', data.from, data.message)
            break
        case 'logout_success':
            AppStore.dispatch('LOGIN', '', '')
            ChatStore.dispatch('CLEARHISTORY')
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

export function logout(account, token) {
  ws.send(JSON.stringify({
    action: 'logout',
    account: account,
    token: token
  }))
}

export function send(msg = '', to = null) {
  ws.send(JSON.stringify({
    action: 'message',
    message: msg,
    token: AppStore.state.token,
    from: AppStore.state.account,
    to: to
  }))
}

export default ws
