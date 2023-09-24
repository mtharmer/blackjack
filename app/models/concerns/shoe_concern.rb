# frozen_string_literal: true

module ShoeConcern
  extend ActiveSupport::Concern

  SUITES = %w[spades clubs diamonds hearts].freeze
  FACES = [
    { face: 'a', value: 11, alternate_value: 1 },
    { face: 'k', value: 10 },
    { face: 'q', value: 10 },
    { face: 'j', value: 10 },
    { face: '10', value: 10 },
    { face: '9', value: 9 },
    { face: '8', value: 8 },
    { face: '7', value: 7 },
    { face: '6', value: 6 },
    { face: '5', value: 5 },
    { face: '4', value: 4 },
    { face: '3', value: 3 },
    { face: '2', value: 2 }
  ].freeze

  included do
    def shuffle_shoe
      cards.destroy_all
      decks = []
      rand(6..9).times { decks << new_deck }
      cards = decks.flatten.shuffle
      update(cards: cards)
      cards
    end

    def new_deck
      cards = []
      SUITES.each do |st|
        FACES.each do |fc|
          cards << Card.new(name: "#{fc[:face]}_of_#{st}", table_id: table_id, value: fc[:value],
                            alternate_value: fc[:alternate_value], cardable_type: 'Shoe', cardable_id: id)
        end
      end
      cards
    end
  end
end
