class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :title
      t.string :location
      t.decimal :latitude
      t.decimal :longitude

      t.timestamps
    end
  end
end
