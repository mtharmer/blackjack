class Table < ApplicationRecord
  belongs_to :table_type

  has_one :dealer
  has_many :players
  has_one :shoe
  has_many :cards

  def join(username)
    user = User.find_by(username: username)
    self.players << Player.new({username: user.username})
    { table: self, dealer_cards: self.dealer_cards, players: self.players, player_cards: self.player_cards }
  end

  def leave(username)
    user = User.find_by(username: username)
    new_players = self.players.filter { |player| player.username != user.username }
    self.players = new_players
    { table: self, dealer_cards: self.dealer_cards, players: self.table.players, player_cards: self.table.player_cards }
  end

  def self.deal(table_id)
    table = Table.includes(dealer: :cards, players: :cards).find_by_id(table_id)

    Card.where(table_id: table_id, cardable_type: ['Player', 'Dealer']).destroy_all

    2.times do
      table.players.each { |player| player.hit }
      table.dealer.hit
    end

    { table: table, dealer_cards: table.dealer_cards, players: table.players.to_a, player_cards: table.player_cards }
  end

  def player_cards
    self.cards.where(cardable_type: "Player")
  end

  def dealer_cards
    self.cards.where(cardable_type: "Dealer");
  end

  def shuffle
    self.shoe.cards = Shoe.new_shoe
    self
  end
end
