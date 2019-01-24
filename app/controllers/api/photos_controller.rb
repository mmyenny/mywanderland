class Api::PhotosController < ApplicationController
  # def index
  #   # Get the specific photo
  #   album = Album.find(params[:id]) 

  #   photos = album.photos

  #   # Make some json to return
  #   render json: {
  #     photos: photos.map do |photo|
  #       {
  #         image: photo.image,
  #         location: photo.caption,  
  #       }
  #     end
  # end

  def show
    photo = current_user.photos.find(params[:id])

    render json: {
      photo: {
        image: photo.image.attached? && url_for(photo.image.variant("auto-orient": true)),
        caption: photo.caption,
        timestamp: photo.created_at
      }
    }
  end

  def create
    if !photos_params["image"]
      render json: { errors: [ "No Image Present"] }
      return
    end

    album = current_user.albums.find(photos_params[:album_id])

    photo = album.photos.create(photos_params)

    render json: photo
  end

  def delete
    photo = current_user.photos.find(params[:id])

    photo.destroy

    render json: photo
  end

  private

  def photos_params
    params.require(:photo).permit(:caption, :album_id, :image)
  end
end
