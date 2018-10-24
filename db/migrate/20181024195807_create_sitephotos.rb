class CreateSitephotos < ActiveRecord::Migration[5.2]
  def change
    create_table :sitephotos do |t|
      t.string :photo
      t.references  :site, foreign_key: true

      t.timestamps
    end
  end
end
