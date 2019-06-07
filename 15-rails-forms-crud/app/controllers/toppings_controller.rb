class ToppingsController < ApplicationController
    before_action :find_topping, only: [:show, :edit, :update, :destroy]

    def index
        @toppings = Topping.all
    end
    
    def new
        @topping = Topping.new
    end

    def create
        topping = Topping.create topping_params
        redirect_to topping
    end

    def show
    end

    def edit
    end

    def update
        @topping.update topping_params
        redirect_to @topping
    end

    def destroy
        @topping.destroy
        redirect_to toppings_path
    end

    private

    def find_topping
        @topping = Topping.find params[:id]
    end

    def topping_params
        params.require(:topping).permit(:name, :color)
    end
end
