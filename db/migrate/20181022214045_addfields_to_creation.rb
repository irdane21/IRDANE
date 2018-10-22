class AddfieldsToCreation < ActiveRecord::Migration[5.2]
  def change
    add_column :creations, :title, :string
    add_column :creations, :url, :string
    add_column :creations, :photo, :string
    add_column :creations, :type, :string
    add_column :creations, :description, :text
  end
end
