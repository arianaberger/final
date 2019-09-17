Rails.application.routes.draw do

  # Potentially edit in future to incorporate with a user login
  root "dashboard#home"

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  namespace :api do
    resources :accounts, except: [:new]
    resources :transactions, only: [:index, :create, :show, :update]

  end
end
