class Deck < ApplicationRecord
  has_many: :cards

  def self.new_deck
    Card.all
  end
end
