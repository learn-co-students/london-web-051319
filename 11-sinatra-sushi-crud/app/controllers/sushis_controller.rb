class SushisController < ApplicationController
    get '/sushis' do
        @sushis = Sushi.all
        erb :'sushis/index'
    end

    get '/sushis/new' do
        @sushi = Sushi.new
        erb :'sushis/new'
    end

    get '/sushis/:id' do
        @sushi = Sushi.find params[:id]
        erb :'sushis/show'
    end

    post '/sushis' do
        sushi = Sushi.create params
        redirect "/sushis/#{sushi.id}"
    end

    get '/sushis/:id/edit' do
        @sushi = Sushi.find params[:id]
        erb :'sushis/edit'
    end

    patch '/sushis/:id' do
        sushi = Sushi.find params[:id]
        sushi.update params.except (:_method)
        redirect "/sushis/#{sushi.id}"
    end

    delete '/sushis/:id' do
        sushi = Sushi.find params[:id]
        sushi.destroy
        redirect '/sushis'
    end

end