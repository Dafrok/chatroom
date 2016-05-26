def get_token ws
  return ws.to_s.split(/x|>/)[1]
end

def clean_users (clients, current_ws)
  clients.each do |key, ws|
    if ws === current_ws
      clients.delete(key)
    end
  end
end

def update_users (clients, current_ws)
  puts clients
  clients.each do |key, ws|
    if ws
      ws.send(JSON.generate({:event => 'update_users', :users => clients.keys}))
    end
  end
end
