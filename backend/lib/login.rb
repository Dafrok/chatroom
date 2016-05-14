def login(data, clients, new_ws)
  clients.each do |key, ws|
    if new_ws === ws
      ws.send('Already login.')
      return
    end
  end
  clients[data.account] = ws
end
