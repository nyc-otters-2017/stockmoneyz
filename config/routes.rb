Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'portfolios/index' => 'portfolios#index'
  get 'portfolios/all' => 'portfolios#all'
  get 'portfolios/list' => 'portfolios#list'
  get 'portfolios/:id/positions' => 'portfolios#positions'
  get 'positions/:id' => 'positions#details'

  root to: "users#index"

  resources :sessions, only: [:new, :create]
  get 'sessions/logout' => "sessions#logout"
  resources :users


end
