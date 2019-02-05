class CreateParties < ActiveRecord::Migration[5.2]
  def change
    create_table :parties do |t|
      t.string :name
      t.references :game, foreign_key: true
      t.integer :score
      t.string :difficulty

      t.timestamps
    end
  end
end
