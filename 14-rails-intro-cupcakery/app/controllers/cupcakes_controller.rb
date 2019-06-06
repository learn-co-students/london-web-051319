class CupcakesController < ApplicationController
  def index
    @cupcakes = Cupcake.all
  end

  def show
    @cupcake = Cupcake.find params[:id]
  end
  
  def new 
  end

  def create
    # byebug
    cupcake = Cupcake.create params.require(:cupcake).permit(:name, :topping, :price)
    redirect_to cupcake
  end

end
