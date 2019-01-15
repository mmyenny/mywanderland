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
    photo = Photo.find(params[:id])

    render json: {
      photo: {
        image: url_for(photo.image),
        caption: photo.caption
      }
    }
  end

  def create
    photo = Photo.create(photos_params)

    render json: photo
  end

  private

  def photos_params
    params.require(:photo).permit(:caption, :album_id, :image)
  end
end
