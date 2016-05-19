# def boardcast(clients, msg)
#   clients.each do |key, ws|
#     ws.send msg
#   end
# end

def send(clients, data)
  # if data['to'] && clients[data['to']]
  #   clients[data['to']].send data['message']
  # else
  #   boardcast(clients, data['message'])
  # end
end
