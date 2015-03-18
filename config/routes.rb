Meetinglean::Application.routes.draw do

  root to: 'landing#index'

  namespace :api do
    resources :meetings do
      resources :meeting_agendas, only: [:create, :update]
    end
  end

  namespace :app do
    root to: 'home#index'

    resources :meetings, only: [:index, :show] do
      member do
        get :start
      end
    end
  end

end
