Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :sessions, only: [:new, :create]
  get 'sessions/logout' => "sessions#logout"
  resources :users
  get 'portfolios/index' => 'portfolios#index'


end
