class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :image_uid
      t.string :title
      t.text :body
      t.datetime :date
      t.string :location

      t.timestamps
    end
  end
end
