# chatroom

For FEX.

## Protocol

### Request

#### Message
```json
{
  "type": "message",
  "message": "${message}",
  "to": "${account}",
}
```

#### Login

```json
{
  "type": "login",
  "account": "${account}"
}
```

#### Logout
```json
{
  "type": "logout"
}
```

### Response
```json
{
  "type": "message",
  "message": "${message}",
  "from": "${account}",
  "public": true
}
```
