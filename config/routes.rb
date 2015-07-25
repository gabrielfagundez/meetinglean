Meetlean::Application.routes.draw do
  devise_for :users

  root to: 'landing#index'

  namespace :app do
    root to: 'home#index'

    resources :clients, only: :index
    resources :projects, only: :index
    resources :workers, only: :index
  end

end
