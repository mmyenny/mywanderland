class Photo < ApplicationRecord
  belongs_to :album
  has_one_attached :image

  geocoded_by :location
  after_validation :geocode
end
