class RemoveFishIdFromSushis < ActiveRecord::Migration
  def change
    remove_column :sushis, :fish_id
  end
end
