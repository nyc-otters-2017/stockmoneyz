Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "users#index"


  resources :sessions, only: [:new, :create]

  get 'sessions/logout' => "sessions#logout"

  resources :users do
    get 'portfolios/:id/positions' => 'portfolios#positions'
    post 'portfolios/:user_id/create' => 'portfolios#create'
    get 'portfolios' => 'portfolios#index'
    get 'portfolios/all' => 'portfolios#all'
    get 'portfolios/list' => 'portfolios#list'
    get 'portfolios/:portfolio_id/positions/:symbol' => 'positions#details'
    patch 'portfolios/:portfolio_id/positions/:symbol' => 'positions#update'
    resources :position
  end


end
