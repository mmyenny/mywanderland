class Place < ApplicationRecord
  has_many :albums

  geocoded_by :location
  after_validation :geocode
end
