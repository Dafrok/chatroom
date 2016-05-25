require 'json'

def log_in(data, clients, new_ws)
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
  new_ws.send(JSON.generate({:event => 'login_success', :message => 'Access!', :account => data['account'], :token => new_ws.to_s.split(/x|>/)[1]}))
end

def log_out (data, clients)
  if (clients[data['account']].to_s.split(/x|>/)[1] === data['token'])
    clients[data['account']].send(JSON.generate({:event => 'logout_success'}))
    clients.delete(data['account'])
  end
end
