class Album < ApplicationRecord
  has_many :photos

  geocoded_by :location
  after_validation :geocode
end
