class Player < ApplicationRecord
  include CardHitter

  attribute :username, :string
  attr_accessor :cards
  attr_writer :cards

  belongs_to :table
  has_many :cards, as: :cardable

  validates :username, presence: true, uniqueness: true

  accepts_nested_attributes_for :cards

  def self.join_table(table_id, username)
    player = Player.create_with(table_id: table_id).find_or_create_by(username: username).as_json
    player["cards"] ||= []
    player
  end

  def leave
    username = self.username
    self.destroy
    username
  end
end
