Meetlean::Application.routes.draw do
  devise_for :users

  root to: 'home#index'

  resources :projects
  resources :clients
  resources :workers

end
