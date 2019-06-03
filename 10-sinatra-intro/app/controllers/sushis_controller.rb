class SushisController < ApplicationController
    get '/sushis' do
        @sushis = Sushi.all
        erb :'sushis/index'
    end

    get '/sushis/:id' do
        @sushi = Sushi.find params[:id]
        erb :'sushis/show'
    end
end