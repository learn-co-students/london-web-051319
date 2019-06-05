class AddFishIdToSushis < ActiveRecord::Migration
  def change
    add_column :sushis, :fish_id, :integer
  end
end
