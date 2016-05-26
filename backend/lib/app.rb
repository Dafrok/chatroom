require 'websocket'
require 'websocket-eventmachine-server'
require 'json'
require './lib/login'
require './lib/message'
require './lib/users'

clients = {}

EM.run do

  WebSocket::EventMachine::Server.start(:host => "0.0.0.0", :port => 2333) do |ws|
    ws.onopen do
      puts "Client connected"
    end

    ws.onmessage do |msg, type|
      data = JSON.parse(msg)
      case data['action']
      when "login"
        log_in(data, clients, ws)
      when "logout"
        if data['token'] === get_token(ws)
          log_out(data, clients, ws)
        end
      when "message"
        if data['token'] === get_token(ws)
          send_message(clients, data)
        end
      else
        puts "Received message: #{data}"
      end
    end

    ws.onclose do
      clean_users(clients, ws)
      update_users(clients, ws)
      puts "Client disconnected"
    end
  end

end
