class Api::PhotosController < ApplicationController
  def index
    # Get the specific photo
    album = Album.find(params[:id]) 

    photos = album.photos

    # Make some json to return
    render json: {
      photos: photos.map do |photo|
        {
          image: photo.image,
          location: photo.caption,  
        }
      end

  end
end
