Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get 'pages/downloadFile' => 'pages#downloadFile'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :creations
  resources :sites
  resources :articles
  resources :videos
  resources :contacts, only: [:new, :create]
  resources :sitephotos, only: [:index, :new, :create, :destroy]
  get '/dashboard', to: 'accounts#dashboard'
end
