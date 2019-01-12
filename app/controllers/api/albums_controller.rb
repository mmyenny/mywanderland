class Api::AlbumsController < ApplicationController
  def index
    # # Get all the location
    # albums = Album.all


    # # Make some json to return
    # render json: {
    #   albums: albums.map do |album|
    #     {
    #       id: album.id,
    #       title: album.title,
    #       location: album.location,
    #       latitude: album.latitude.to_f,
    #       longitude: album.longitude.to_f,
    #       image: album.photos.first ? url_for(album.photos.first.image) : nil
    #     }
    #   end
    # }
  
  end
end
