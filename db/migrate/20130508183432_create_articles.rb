class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :image_uid
      t.string :title
      t.datetime :date
      t.text :body
      t.boolean :featured

      t.timestamps
    end
  end
end
