class Photo < ApplicationRecord
  belongs_to :album
  has_one_attached :image

  def thumbnail
    image.variant(
      combine_options: {
        resize: "125x100",
        gravity: "center",
        extent: "125x100",  
        background: "black"
      }
    )
  end
end
