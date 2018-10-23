Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :creations
  resources :sites
  resources :articles
  resources :videos
  get '/dashboard', to: 'accounts#dashboard'
end
