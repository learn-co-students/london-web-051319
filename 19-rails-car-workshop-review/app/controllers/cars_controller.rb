class CarsController < ApplicationController

    def index
        @cars = Car.sort_and_filter params
        @brands = Brand.all
        @sort_options = ['ascending', 'descending']
    end

    def new
        @car = Car.new
    end

    def create
        car = Car.create car_params
        if car.valid?
            redirect_to car
        else
            flash[:errors] = car.errors.full_messages
            redirect_to new_car_path
        end
    end

    def show
        @car = Car.find params[:id]
    end

    private 
    
    def car_params
        params.require(:car).permit(:brand_id, :owner_id, :mechanic_id, :mileage)
    end
end
