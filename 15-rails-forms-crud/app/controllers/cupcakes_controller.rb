class CupcakesController < ApplicationController
  def index
    @cupcakes = Cupcake.all
  end

  def show
    @cupcake = Cupcake.find params[:id]
  end
  
  def new 
    @cupcake = Cupcake.new
  end

  def create
    # byebug
    cupcake = Cupcake.create params.require(:cupcake).permit(:name, :topping_id, :price)
    redirect_to cupcake
  end

end
