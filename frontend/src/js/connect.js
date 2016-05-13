const ws = new WebSocket('ws://localhost:2333')

ws.onmessage = function (e) {
  const data = JSON.parse(e.data)
  console.log(data)
}

export function login(account) {
  ws.send(JSON.stringify({
    account: account
  }))
}

export function send(msg = '', to = null) {
  ws.send(JSON.stringify({
    message: msg,
    to: to
  }))
}

export default ws
