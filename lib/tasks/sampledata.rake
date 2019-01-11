namespace :sampledata do
  desc "TODO"
  task create: :environment do

    place = Place.create(location: "Chicago, IL")

    album = place.albums.create(title: "Family Vacation")

    photo = album.photos.create(caption: "Yearly camping lalapalooza - summer 2015")
    photo.image.attach(io: File.open(Rails.root.join("public/mountains2.jpeg")), filename: "mountains2.jpeg")

    photo = album.photos.create(caption: "Yearly camping lalapalooza - summer 2015")
    photo.image.attach(io: File.open(Rails.root.join("public/mountains2.jpeg")), filename: "mountains2.jpeg")

    photo = album.photos.create(caption: "Yearly camping lalapalooza - summer 2015")
    photo.image.attach(io: File.open(Rails.root.join("public/mountains2.jpeg")), filename: "mountains2.jpeg")


    place = Place.create(location: "Tampa, FL")

    album = place.albums.create(title: "XMAS")
    
    photo = album.photos.create(caption: "Yearly camping lalapalooza - summer 2015")
    photo.image.attach(io: File.open(Rails.root.join("public/mountains2.jpeg")), filename: "mountains2.jpeg")

  end

end
