# chatroom

For FEX.

## Protocol

### Request

#### Message
```json
{
  "action": "message",
  "message": "${message}",
  "to": "${account}",
}
```

#### Login

```json
{
  "action": "login",
  "account": "${account}"
}
```

#### Logout
```json
{
  "action": "logout"
}
```

### Response
```json
{
  "action": "message",
  "message": "${message}",
  "from": "${account}",
  "public": true
}
```
