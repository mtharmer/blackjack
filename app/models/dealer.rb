class Dealer < ApplicationRecord
  include CardHitter
  belongs_to :table
  has_many :cards, as: :cardable
end
