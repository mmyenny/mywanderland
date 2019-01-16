class Album < ApplicationRecord
  has_many :photos
  belongs_to :place
  
  validates :title, presence: true
end
