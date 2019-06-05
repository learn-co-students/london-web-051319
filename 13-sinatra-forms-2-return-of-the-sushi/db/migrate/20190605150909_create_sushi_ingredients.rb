class CreateSushiIngredients < ActiveRecord::Migration
  def change
    create_table :sushi_ingredients do |t|
      t.integer :sushi_id
      t.integer :ingredient_id

      t.timestamps null: false
    end
  end
end
