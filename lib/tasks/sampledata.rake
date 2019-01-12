namespace :sampledata do
  desc "TODO"
  task create: :environment do

    place = Place.create(location: "Chicago, IL")

    album = place.albums.create(title: "Family Vacation")

    photo = album.photos.create(caption: "Yearly camping lalapalooza - summer 2015")
    photo.image.attach(io: File.open(Rails.root.join("client/src/images/mountains1.jpeg")), filename: "mountains1.jpeg")

    photo = album.photos.create(caption: "Yearly camping lalapalooza - summer 2015")
    photo.image.attach(io: File.open(Rails.root.join("client/src/images/mountains2.jpeg")), filename: "mountains2.jpeg")
    photo = album.photos.create(caption: "Yearly camping lalapalooza - summer 2015")
    photo.image.attach(io: File.open(Rails.root.join("client/src/images/mountains3.jpeg")), filename: "mountains3.jpeg")

    album = place.albums.create(title: "Summer")

    photo = album.photos.create(caption: "Hiking with friends")
    photo.image.attach(io: File.open(Rails.root.join("client/src/images/mountains4.jpeg")), filename: "mountains4.jpeg")

    photo = album.photos.create(caption: "Shenanigans")
    photo.image.attach(io: File.open(Rails.root.join("client/src/images/beach1.jpeg")), filename: "beach1.jpeg")


    place = Place.create(location: "Tampa, FL")

    album = place.albums.create(title: "XMAS")
    
    photo = album.photos.create(caption: "Yearly camping lalapalooza - summer 2015")
    photo.image.attach(io: File.open(Rails.root.join("client/src/images/beach2.jpeg")), filename: "beach2.jpeg")

    album = place.albums.create(title: "Home")
    
    photo = album.photos.create(caption: "Our new home")
    photo.image.attach(io: File.open(Rails.root.join("client/src/images/beach3.jpeg")), filename: "beach3.jpeg")

  end

end
