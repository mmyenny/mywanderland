class Place < ApplicationRecord
  belongs_to :user
  has_many :albums

  geocoded_by :location
  after_validation :geocode
end
