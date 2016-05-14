require 'websocket'
require 'websocket-eventmachine-server'
require 'json'
require './login'
require './message'

clients = {}

EM.run do

  WebSocket::EventMachine::Server.start(:host => "0.0.0.0", :port => 2333) do |ws|
    ws.onopen do
      puts "Client connected"
    end

    ws.onmessage do |msg, type|
      data = JSON.parse(msg)
      case data.action
      when "login"
        login(data, clients, ws)
      when "message"
        send(clients, data)
      else
        puts "Received message: #{data}"
      end
    end

    ws.onclose do
      puts "Client disconnected"
    end
  end

end
