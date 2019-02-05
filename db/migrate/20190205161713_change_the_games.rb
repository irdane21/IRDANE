class ChangeTheGames < ActiveRecord::Migration[5.2]
  def change
    remove_column :games, :game, :string
    remove_column :games, :score, :integer
    remove_column :games, :difficulty, :string
  end
end
