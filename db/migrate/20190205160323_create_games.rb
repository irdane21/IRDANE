class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :name
      t.string :game
      t.integer :score
      t.string :difficulty

      t.timestamps
    end
  end
end
