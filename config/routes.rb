Meetlean::Application.routes.draw do

  devise_for :users
  root to: 'landing#index'

  namespace :api do
    resources :meetings do
      resources :meeting_action_items, only: [:create, :update]
      resources :meeting_agendas, only: [:create, :update]
      resources :meeting_decisions, only: [:create, :update]
      resources :meeting_open_issues, only: [:create, :update]
      resources :meeting_private_notes, only: [:create, :update]
      resources :meeting_summaries, only: [:create, :update]
    end
  end

  namespace :app do
    root to: 'home#index'

    resources :meetings, only: [:index, :show, :create] do
      member do
        get :start
      end
    end
  end

end
