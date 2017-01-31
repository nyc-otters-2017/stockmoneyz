Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'portfolios/index' => 'portfolios#index'
  get 'portfolios/all' => 'portfolios#all'
  get 'portfolios/positions' => 'portfolios#positions'
  get 'portfolios/:id' => 'portfolios#show'
  get 'positions/:id' => 'positions#details'

  resources :sessions, only: [:new, :create]
  get 'sessions/logout' => "sessions#logout"
  resources :users


end
