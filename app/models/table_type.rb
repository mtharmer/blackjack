# frozen_string_literal: true

class TableType < ApplicationRecord
  has_many :tables, dependent: :destroy
end
