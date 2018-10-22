class CreateCreations < ActiveRecord::Migration[5.2]
  def change
    create_table :creations do |t|

      t.timestamps
    end
  end
end
