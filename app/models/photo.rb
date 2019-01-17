class Photo < ApplicationRecord
  belongs_to :album
  has_one_attached :image

  validates :image, presence: true

  def thumbnail
    image.variant(
      combine_options: {
        resize: "125x125",
        gravity: "center",
        extent: "125x125",  
        background: "black"
      }
    )
  end
end
