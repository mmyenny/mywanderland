class Api::AlbumsController < ApplicationController
  def index
    # Get all the location
    albums = Album.all

    # Make some json to return
    return json: {
      albums: albums.map do |album|
        id: album.id,
        title: album.title,
        location: album.location
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
