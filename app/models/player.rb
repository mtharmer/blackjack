class Player < Person
  include Mongoid::Document
  include Mongoid::Timestamps

  field :username, type: String
  attr_accessor :cards

  belongs_to :table
  embeds_many :cards #, as: :cardable

  store_in collection: :players

  def give_cards(cards)
    @cards = cards
  end

  def save_cards(cards)
    self.update(cards: cards)
  end
end
