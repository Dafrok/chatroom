require 'json'

def log_in (data, clients, new_ws)
  if data['account'] === ''
    new_ws.send(JSON.generate({:event => 'login_error', :message => 'Invalid username.'}))
    return
  end
  clients.each do |key, ws|
    if new_ws === ws
      ws.send(JSON.generate({:event => 'login_error', :message => 'This username has Already exists.'}))
      return
    end
  end
  clients[data['account']] = new_ws
  new_ws.send(JSON.generate({:event => 'login_success', :message => 'Access!', :account => data['account'], :token => get_token(new_ws)}))
  update_users(clients, new_ws)
end

def log_out (data, clients, current_ws)
  if (get_token(clients[data['account']]) === data['token'])
    clients[data['account']].send(JSON.generate({:event => 'logout_success'}))
    clients.delete(data['account'])
    clean_users(clients, new_ws)
    update_users(clients, current_ws)
  end
end
