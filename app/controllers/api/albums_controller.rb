class Api::AlbumsController < ApplicationController
  def index
    # Get the specific album
    place = current_user.places.find(params[:id]) 

    albums = place.albums.order(created_at: :desc)

    # Make some json to return
    render json: {
      user: {
        id: current_user.id,
        name: current_user.name,
        profile_image: current_user.profile_image.attached? ? url_for(current_user.profile_image) : ""
      },
      place: {
        location: place.location
      },
      albums: albums.map do |album|
        {
          id: album.id,
          title: album.title,
          images: album.
                    photos.
                    order(:created_at).
                    # Only take the photos that have an image attached, no back end
                    select { |photo| photo.image.attached? }.
                    map do |photo|
                      {
                        id: photo.id,
                        caption: photo.caption,
                        image: photo.image.attached? ? url_for(photo.thumbnail) : ""
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

    if album.valid?
      render json: album
    else
      render json: {
        errors: album.errors.full_messages
      }
    end
  end

  def delete
    album = current_user.albums.find(params[:id])

    album.destroy

    render json: album
  end

  private

  def albums_params
    # <input name="album[title]"/>
    # <input hidden name="album[place_id]"/>
    params.require(:album).permit(:title, :place_id)
  end
end