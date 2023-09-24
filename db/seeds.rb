# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

table_types = [
  { buy_in_max: 100, buy_in_min: 10, ante: 1 },
  { buy_in_max: 200, buy_in_min: 20, ante: 2 },
  { buy_in_max: 500, buy_in_min: 50, ante: 5 }
]

table_types.each do |tb|
  next if TableType.where(buy_in_max: tb[:buy_in_max], buy_in_min: tb[:buy_in_min]).present?

  table_type = TableType.create!(buy_in_max: tb[:buy_in_max], buy_in_min: tb[:buy_in_min], ante: tb[:ante])
  table = Table.create!(table_type_id: table_type.id)
  Dealer.create!(table_id: table.id)
  Shoe.create!(table_id: table.id)
end

User.create!(username: 'someuser')
