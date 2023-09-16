# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

suites = ["spades", "clubs", "diamonds", "hearts"]
faces = [
  {face: "A", value: 11, alternate_value: 1},
  {face: "K", value: 10},
  {face: "Q", value: 10},
  {face: "J", value: 10},
  {face: "10", value: 10},
  {face: "9", value: 9},
  {face: "8", value: 8},
  {face: "7", value: 7},
  {face: "6", value: 6},
  {face: "5", value: 5},
  {face: "4", value: 4},
  {face: "3", value: 3},
  {face: "2", value: 2}
]

suites.each do |st|
  faces.each do |fc|
    if Card.find_by(face: fc[:face], suite: st).nil?
      Card.create(face: fc[:face], suite: st, value: fc[:value], alternate_value: fc[:alternate_value])
    end
  end
end
