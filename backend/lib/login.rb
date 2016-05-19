require 'json'

def login(data, clients, new_ws)
  clients.each do |key, ws|
    if new_ws === ws
      ws.send(JSON.generate({:event => 'login_error', :message => 'This username has Already exists.'}))
      return
    end
  end
  clients[data['account']] = new_ws
  new_ws.send(JSON.generate({:event => 'login_success', :message => 'Access!', :token => new_ws.to_s.split(/x|>/)[1]}))
end
