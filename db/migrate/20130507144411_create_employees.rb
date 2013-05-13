class CreateEmployees < ActiveRecord::Migration
  def change
    create_table :employees do |t|
      t.string :image_uid
      t.string :name
      t.text :body
      t.string :position

      t.timestamps
    end
  end
end
