class Shoe < ApplicationRecord
  include Shuffler
  after_create :shuffle

  belongs_to :table
  has_many :cards, as: :cardable

end
