Rails.application.routes.draw do
  namespace :api do
      namespace :v1 do
          resources :users, only: [:create]
          resources :posts, only: [:create, :show, :index]
      end
  end
end
