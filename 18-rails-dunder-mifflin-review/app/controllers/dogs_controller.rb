class DogsController < ApplicationController
    def index
        @dogs = Dog.all
    end

    def show
        @dog = Dog.find params[:id]
    end

    def available
        @dogs = Dog.available
    end

    def adopt_form
        @dog = Dog.find params[:dog_id]
        @employees = Employee.all
    end

    def adopt
        employee = Employee.find params[:employee_id]
        employee.dog_id = params[:dog_id]
        employee.save
        redirect_to available_dogs_path
    end
end
