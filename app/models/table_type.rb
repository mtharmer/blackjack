class TableType
  include Mongoid::Document
  include Mongoid::Timestamps

  field :buy_in_max, type: Integer
  field :buy_in_min, type: Integer
  field :ante, type: Integer

  has_many :tables
end
