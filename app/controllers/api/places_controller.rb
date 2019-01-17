class Api::PlacesController < ApplicationController
  def index
    # Get all the location
    places = current_user.places.where.not(longitude: nil, latitude: nil)

    # Make some json to return
    render json: {
      places: places.map do |place|
        {
          id: place.id,
          location: place.location,
          latitude: place.latitude,
          longitude: place.longitude,
          album: place.albums,
          thumbnail: place.photos.first && url_for(place.photos.first.image)
        }
      end
    }
    
    # albums: [
    #   {
    #     id: 1,
    #     title: 'Summer Vacation',
    #     location: 'St Petersburg',
    #     latitude: 27.7700989,
    #     longitude: -82.6364093
    #   },
    #   {
    #     id: 2,
    #     title: 'Christmas 2015',
    #     location: 'Tampa',
    #     latitude: 27.7708,
    #     longitude: -82.6635
    #   }
    # ]
  end

  def create
    place = current_user.places.create(places_params)

    render json: place
  end

  def delete
    place = current_user.places.find(params[:id])

    place.destroy

    render json: place
  end

  private

  def places_params
    params.require(:place).permit(:location)
  end
end
