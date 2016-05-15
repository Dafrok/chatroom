def login(data, clients, new_ws)
  clients.each do |key, ws|
    if new_ws === ws
      ws.send('Already login.')
      return
    end
  end
  puts data['account']
  clients[data['account']] = new_ws
end
