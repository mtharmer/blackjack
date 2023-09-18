class Shoe < ApplicationRecord
  def self.new_shoe
    decks = []
    deck_count = 6 + rand(3)
    deck_count.times do
      decks.push(Card.all)
    end
    decks.flatten.shuffle
  end
end
