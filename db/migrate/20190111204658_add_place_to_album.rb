class AddPlaceToAlbum < ActiveRecord::Migration[5.2]
  def change
    add_reference :albums, :place, foreign_key: true
  end
end
