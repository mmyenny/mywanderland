class Place < ApplicationRecord
  belongs_to :user
  has_many :albums, dependent: :destroy
  has_many :photos, through: :albums

  geocoded_by :location
  after_validation :geocode
end
