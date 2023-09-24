# frozen_string_literal: true

class Table < ApplicationRecord
  belongs_to :table_type

  has_one :dealer, dependent: :destroy
  has_one :shoe, dependent: :destroy
  has_many :players, dependent: :destroy
  # has_many :cards, dependent: :destroy

  def join(username)
    user = User.find_by(username: username)
    players << Player.new(username: user.username)
    { table: self, dealer_cards: dealer_cards, players: players, player_cards: player_cards }
  end

  def leave(username)
    user = User.find_by(username: username)
    players.filter { |player| player.username != user.username }
    { table: self, dealer_cards: dealer_cards, players: table.players, player_cards: table.player_cards }
  end

  def deal
    Card.where(table_id: id, cardable_type: %w[Player Dealer]).destroy_all

    shoe.shuffle_shoe unless shoe.cards.length >= 104

    distribute_cards

    { table: self, dealer_cards: dealer_cards, players: players.to_a, player_cards: player_cards }
  end

  def distribute_cards
    2.times do
      players.each(&:hit)
      dealer.hit
    end
  end

  def player_cards
    cards.where(cardable_type: 'Player')
  end

  def dealer_cards
    cards.where(cardable_type: 'Dealer')
  end
end
