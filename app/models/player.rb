class Player < ApplicationRecord
  include CardHitter

  attribute :username, :string
  attr_accessor :cards
  attr_writer :cards

  belongs_to :table
  has_many :cards, as: :cardable

  validates :username, presence: true, uniqueness: true

  accepts_nested_attributes_for :cards

  def self.join_table(table_id, username, balance)
    balance = balance.to_f
    table = Table.find_by_id(table_id).table_type
    user = User.find_by(username: username)
    # if balance > table.buy_in_max || balance < table.buy_in_min || balance > user.balance
    #   return nil
    # end
    new_user_balance = user.balance - balance
    user.update!(balance: new_user_balance)
    player = Player.create_with(table_id: table_id, buy_in_balance: balance).find_or_create_by(username: username).as_json
    player["cards"] ||= []
    player
  end

  def leave
    username = self.username
    user = User.find_by(username: username)
    new_user_balance = user.balance + self.buy_in_balance
    user.update!(balance: new_user_balance)
    self.destroy
    username
  end
end
