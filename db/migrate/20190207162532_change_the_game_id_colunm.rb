class ChangeTheGameIdColunm < ActiveRecord::Migration[5.2]
  def change
    remove_column :parties, :game_id, :references
    add_column :parties, :game, :string
  end
end
