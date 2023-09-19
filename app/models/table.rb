class Table
  include Mongoid::Document
  include Mongoid::Timestamps

  belongs_to :table_type

  attr_accessor :players, :dealer, :shoe

  has_one :dealer
  has_many :players
  has_one :shoe

  accepts_nested_attributes_for :dealer, :shoe, :players

  def join(username)
    user = User.find_by(username: username)
    self.players << Player.new({username: user.username})
    { table: self, dealer: self.dealer, players: self.players }
  end

  def leave(username)
    user = User.find_by(username: username)
    new_players = self.players.filter { |player| player.username != user.username }
    self.players = new_players
    { table: self, dealer: self.dealer, players: self.players }
  end

  def deal
    players = self.players
    mod_players = players.to_a.map { |player| { id: player.id, username: player.username, cards: [] } }
    dealer = self.dealer
    dealer_cards = []
    shoe_cards = get_shoe_slice(players.length + 1)

    distribute_cards(mod_players, dealer_cards, shoe_cards)

    players.each { |player| player.set(cards: get_player_cards(player.id, mod_players)) }

    dealer.set(cards: dealer_cards)

    {table: self, dealer: dealer, players: players}
  end

  def hit(username)
    puts "\n\n\nCalling #hit with #{username}"
    player = Player.find_by(username: username)
    puts "player: #{player.inspect}\n\n\n"
    cards = player.cards.to_a
    cards << one_from_shoe
    player.set(cards: cards)
    {table: self, dealer: self.dealer, players: self.players}
  end

  def shuffle
    self.shoe.cards = Shoe.new_shoe
    self
  end

  private

  def get_player_cards(player_id, player_list)
    found_player = player_list.find { |player| player[:id] == player_id }
    found_player[:cards] || []
  end

  def distribute_cards(players, dealer_cards, shoe_cards)
    2.times do
      players.each { |player| player[:cards] << shoe_cards.shift }
      dealer_cards << shoe_cards.shift
    end
  end

  def get_shoe_slice(len)
    # Reshuffle if there are less than two decks remaining in the shoe
    self.shuffle if self.shoe.cards.length < 104

    cards = self.shoe.cards.to_a
    shoe_slice = cards.slice!(0, 2*len)
    self.shoe.set(cards: cards)
    shoe_slice.to_a
  end

  def one_from_shoe
    cards = self.shoe.cards.to_a
    card = cards.shift
    self.shoe.set(cards: cards)
    card
  end
end
