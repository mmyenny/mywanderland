Rails.application.routes.draw do

  get '/api/albums/:id', to: 'api/albums#index'
  post '/api/albums', to: 'api/albums#create'

  post '/api/places', to: 'api/places#create'
  get '/api/places', to: 'api/places#index'
  
  get '/api/photos', to: 'api/photos#index'
  get '/api/photos/:id', to: 'api/photos#show'
  post '/api/photos', to: 'api/photos#create'
  delete '/api/photos/:id', to: 'api/photos#delete'
end
