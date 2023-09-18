class TableType < ApplicationRecord
  validates :buy_in_max, presence: true
  validates :buy_in_min, presence: true
  validates :ante, presence: true
end
