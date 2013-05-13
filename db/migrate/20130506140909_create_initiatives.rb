class CreateInitiatives < ActiveRecord::Migration
  def change
    create_table :initiatives do |t|
      t.string :image_uid
      t.string :title
      t.string :summary
      t.text :body

      t.timestamps
    end
  end
end
