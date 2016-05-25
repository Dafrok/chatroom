def boardcast(clients, data)
  clients.each do |key, ws|
    ws.send JSON.generate({:event => 'message', :message => data['message'], :from => data['from']})
  end
end

def send_message(clients, data)
  if data['message'] === ''
    return
  end
  if data['to'] && clients[data['to']]
    clients[data['to']].send JSON.generate({:event => 'message', :message => data['message'], :from => data['from']})
  else
    boardcast(clients, data)
  end
end
