# frozen_string_literal: true

class Shoe < ApplicationRecord
  include ShoeConcern
  # after_create :shuffle_shoe

  belongs_to :table
  has_many :cards, as: :cardable, dependent: :destroy
end
