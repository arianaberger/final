Rails.application.routes.draw do

# Potentially edit in future to incorporate with a user login
root "dashboard#home"

  namespace :api do
    resources :accounts, except: [:new]
    resources :transactions, only: [:index, :create, :destroy]
  end
end
