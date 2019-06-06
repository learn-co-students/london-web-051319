class CreateCupcakes < ActiveRecord::Migration[5.2]
  def change
    create_table :cupcakes do |t|
      t.string :name
      t.float :price
      t.string :topping

      t.timestamps
    end
  end
end
