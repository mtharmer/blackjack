class Card < ApplicationRecord
  validates :face, presence: :true, uniqueness: { scope: :suite, message: "Face card already exists for this suite" }
  validates :suite, presence: :true
  validates :value, presence: :true
end
