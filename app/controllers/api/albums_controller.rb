class Api::AlbumsController < ApplicationController
  def index
    # Get the specific album
    place = current_user.places.find(params[:id]) 

    albums = place.albums

    # Make some json to return
    render json: {
      user: {
        id: current_user.id,
        name: current_user.name,
        profile_image: url_for(current_user.profile_image)
      },
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
    # Find the place given by place_id amongst the user's places
    place = current_user.places.find(albums_params[:place_id])

    # For that place, create a new album
    album = place.albums.create(albums_params)

    render json: album
  end

  private

  def albums_params
    # <input name="album[title]"/>
    # <input hidden name="album[place_id]"/>
    params.require(:album).permit(:title, :place_id)
  end
end