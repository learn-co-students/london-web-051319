class DropFish < ActiveRecord::Migration
  def change
    drop_table :fish
  end
end
