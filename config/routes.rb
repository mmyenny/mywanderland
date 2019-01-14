Rails.application.routes.draw do

  get '/api/albums/:id', to: 'api/albums#index'
  post '/api/albums', to: 'api/albums#create'

  post '/api/places', to: 'api/places#create'
  get '/api/places', to: 'api/places#index'
  
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  if Rails.env.production?
    CLIENT_HTML = File.read(Rails.root.join('public/index.html'))

    get "*path", to: proc { [200, {}, [CLIENT_HTML]] }
  end
end
