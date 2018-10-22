class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :url
      t.string :photo
      t.text :description
      t.string :collection

      t.timestamps
    end
  end
end
