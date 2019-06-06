Rails.application.routes.draw do
  resources :cupcakes, only: [:index, :show, :new, :create]
  # get 'cupcakes/index'
  # get 'cupcakes/show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
