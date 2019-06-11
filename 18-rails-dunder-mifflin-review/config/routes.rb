Rails.application.routes.draw do
  get '/dogs/available', to: 'dogs#available', as: :available_dogs
  get '/dogs/adopt_form', to: 'dogs#adopt_form', as: :adopt_form
  post '/dogs/adopt', to: 'dogs#adopt', as: :adopt_dog
  resources :dogs
  resources :employees
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
