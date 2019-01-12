class Api::AlbumsController < ApplicationController
  def index
    # Get all the location
    albums = Album.all

    

    # Make some json to return
    render json: {
      albums: albums.map do |album|
        {
          id: album.id,
          title: album.title,
          image: album.photos.map do |photo|
            {
              id: photo.id,
              caption: photo.caption,
              image: url_for(photo.image)
            }
          end


          # image: album.photos

          # image: album.photos.first ? url_for(album.photos.first.image) : nil
        }
      end
    }
  
  end
end
