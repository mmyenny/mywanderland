class Api::PlacesController < ApplicationController
  def index
    # Get all the location
    places = Place.all


    # Make some json to return
    render json: {
      places: places.map do |place|
        {
          id: place.id,
          location: place.location,
          latitude: place.latitude,
          longitude: place.longitude
        
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
end
