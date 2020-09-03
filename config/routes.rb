Rails.application.routes.draw do
  root "titles#index"
  resources :titles, only: [:index]
  resources :lessons, only: [:index]
end
