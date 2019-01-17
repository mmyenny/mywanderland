class Place < ApplicationRecord
  belongs_to :user
  has_many :albums, dependent: :destroy

  geocoded_by :location
  after_validation :geocode
end
