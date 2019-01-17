require 'net/http'

class User < ApplicationRecord
  has_one_attached :profile_image
  has_many :places, dependent: :destroy
  has_many :albums, through: :places
  has_many :photos, through: :albums

  def self.from_auth_hash(payload)
    User.find_or_create_by(auth_sub: payload["sub"]) do |user|
      # This code will be called whenever we create a User for the first time.
  
      # This code would attach an ActiveStorage profile image by downloading the user's profile and storing it locally
      begin
        picture = Down.download(payload["picture"])
        user.profile_image.attach(io: picture, filename: picture.original_filename)
      rescue Down::Error => exception
        Rails.logger.info exception
      end
      
      # This code would store their email address
      # user.email = payload["email"]
      user.name = payload["name"]
    end
  end
end
