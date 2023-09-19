class Dealer
  include Mongoid::Document
  include Mongoid::Timestamps

  attr_accessor :cards

  belongs_to :table
  embeds_many :cards, as: :cardable

  # def give_cards(cards = [])
  #   @cards = cards
  # end
end
