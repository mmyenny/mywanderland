class Api::AlbumsController < ApplicationController
  def index
    # Get the specific album
    place = Place.find(params[:id]) 

    albums = place.albums

    # Make some json to return
    render json: {
      albums: albums.map do |album|
        {
          id: album.id,
          title: album.title,
          images: album.photos.map do |photo|
            {
              id: photo.id,
              caption: photo.caption,
              image: url_for(photo.image)
            }
          end

          # image: album.photos.first ? url_for(album.photos.first.image) : nil
        }
      end
    }
  end

  def create
    album = Album.create(albums_params)

    render json: album
  end

  private

  def albums_params
    # <input name="album[title]"/>
    # <input hidden name="album[place_id]"/>
    params.require(:album).permit(:title, :place_id)
  end
end