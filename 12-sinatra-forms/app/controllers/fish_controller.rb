class FishController < ApplicationController

    get '/fish' do
        @fish = Fish.all
        erb :'fish/index'
    end

    get '/fish/new' do
        erb :'fish/new'
    end

    get '/fish/:id' do
        @fish = Fish.find params[:id]
        erb :'fish/show'
    end

    post '/fish' do
        fish = Fish.create params[:fish]
        redirect "/fish/#{fish.id}"
    end

end