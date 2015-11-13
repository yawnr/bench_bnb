# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Bench.destroy_all


bench1 = Bench.create(description: "West 4th", lat: 40.731321, lng: -74.000396)
bench2 = Bench.create(description: "Carmine and Bedford", lat: 40.730001, lng: -74.003199)
bench3 = Bench.create(description: "Houston and Broadway", lat: 40.725410, lng: -73.996889)
bench4 = Bench.create(description: "Bryant Park", lat: 40.754232, lng: -73.982444)
bench5 = Bench.create(description: "World Trade", lat: 40.713299, lng: -74.011288)
