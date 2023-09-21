class Player < Person
  include Mongoid::Document
  include Mongoid::Timestamps

  field :username, type: String
  attr_accessor :cards

  belongs_to :table
  embeds_many :cards, as: :cardable

  store_in collection: :players

  def hit
    shoe = Shoe.find_by(table_id: self.table_id)
    cards = self.cards.to_a
    cards << shoe.cards.shift
    self.set(cards: cards)
    self
  end
end
