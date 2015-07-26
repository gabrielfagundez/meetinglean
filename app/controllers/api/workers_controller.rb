class Api::WorkersController < ApplicationController

  def index
    workers = Person.all
    render json: workers.to_json
  end

end