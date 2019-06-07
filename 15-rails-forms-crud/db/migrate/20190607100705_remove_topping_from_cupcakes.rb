class RemoveToppingFromCupcakes < ActiveRecord::Migration[5.2]
  def change
    remove_column :cupcakes, :topping, :string
  end
end
