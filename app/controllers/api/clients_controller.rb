class Api::ClientsController < ApplicationController

  def index
    clients = Client.all
    render json: clients.to_json
  end

end