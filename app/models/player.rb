# frozen_string_literal: true

class Player < ApplicationRecord
  include CardHitter

  attribute :username, :string

  belongs_to :table
  has_many :cards, as: :cardable, dependent: :destroy

  validates :username, presence: true, uniqueness: true

  def self.join_table(table_id, username, balance)
    balance = balance.to_f
    user = User.find_by(username: username)
    # TODO: Enable checking on balance against table and user balances
    # table = Table.find_by(id: table_id).table_type
    # if balance > table.buy_in_max || balance < table.buy_in_min || balance > user.balance
    #   return nil
    # end
    user.balance -= balance
    player = Player.create_with(table_id: table_id, buy_in_balance: balance)
                   .find_or_create_by(username: username).as_json
    player['cards'] ||= []
    player
  end

  def leave
    username = self.username
    user = User.find_by(username: username)
    user.balance += buy_in_balance
    destroy
    username
  end
end
