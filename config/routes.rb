Meetlean::Application.routes.draw do
  devise_for :users

  root to: 'landing#index'

  # Main App
  namespace :app do
    root to: 'home#index'

    resources :clients, only: :index
    resources :projects, only: :index
    resources :workers, only: :index
  end

  # API
  namespace :api do
    resources :clients
    resources :projects
    resources :workers
  end

end
