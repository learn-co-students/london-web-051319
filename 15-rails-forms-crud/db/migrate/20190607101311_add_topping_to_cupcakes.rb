class AddToppingToCupcakes < ActiveRecord::Migration[5.2]
  def change
    add_reference :cupcakes, :topping, foreign_key: true
  end
end
