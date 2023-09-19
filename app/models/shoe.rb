class Shoe
  include Mongoid::Document
  include Mongoid::Timestamps

  attr_accessor :cards

  belongs_to :table
  embeds_many :cards, as: :cardable

  def self.new_shoe
    decks = []
    deck_count = 6 + rand(3)
    deck_count.times do
      decks.push(Shoe.new_deck)
    end
    decks.flatten.shuffle
  end

  SUITES = ["spades", "clubs", "diamonds", "hearts"]
  FACES = [
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

  def self.new_deck
    cards = []
    SUITES.each do |st|
      FACES.each do |fc|
        cards.push(Card.new({face: fc[:face], suite: st, value: fc[:value], alternate_value: fc[:alternate_value]}))
      end
    end
    cards
  end
end
