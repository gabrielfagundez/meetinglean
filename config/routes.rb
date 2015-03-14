Meetinglean::Application.routes.draw do

  root to: 'landing#index'

  namespace :api do
    resources :meetings, only: [:index, :show]
  end

  namespace :app do
    root to: 'home#index'

    resources :meetings, only: [:index, :show]
  end

end
