# frozen_string_literal: true

class Card < ApplicationRecord
  attribute :name, :string
  attribute :value, :integer
  attribute :alternate_value, :integer

  belongs_to :cardable, polymorphic: true
end
