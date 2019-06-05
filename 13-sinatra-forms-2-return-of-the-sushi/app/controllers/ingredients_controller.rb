class IngredientsController < ApplicationController

    get '/ingredients' do
        @ingredients = Ingredient.all
        erb :'ingredients/index'
    end

    get '/ingredients/new' do
        erb :'ingredients/new'
    end

    get '/ingredients/:id' do
        @ingredient = Ingredient.find params[:id]
        erb :'ingredients/show'
    end

    post '/ingredients' do
        ingredient = Ingredient.create params[:ingredient]
        if params[:new_sushi_form]
            redirect '/sushis/new'
        else
            redirect "/ingredients/#{ingredient.id}"
        end
    end

    get '/ingredients/:id/edit' do
        @ingredient = Ingredient.find params[:id]
        erb :'ingredients/edit'
    end

    patch '/ingredients/:id' do
        ingredient = Ingredient.find params[:id]
        ingredient.update params[:ingredient]
        redirect "/ingredients/#{ingredient.id}"
    end

end