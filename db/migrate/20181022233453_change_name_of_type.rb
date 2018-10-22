class ChangeNameOfType < ActiveRecord::Migration[5.2]
  def change
    rename_column :creations, :type, :collection
  end
end
