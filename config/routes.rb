Meetinglean::Application.routes.draw do

  root to: 'landing#index'

  namespace :app do
    root to: 'home#index'
  end

end
