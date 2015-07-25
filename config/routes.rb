Meetlean::Application.routes.draw do
  devise_for :users

  root to: 'landing#index'

  namespace :app do
    root to: 'home#index'
  end

end
