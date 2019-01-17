class Album < ApplicationRecord
  has_many :photos, dependent: :destroy
  belongs_to :place
  
  validates :title, presence: true
end
