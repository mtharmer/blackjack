class Deck
  include Mongoid::Document
  has_many :cards
  # belongs_to :shoe

  def self.new_deck
    Card.all
  end
end
