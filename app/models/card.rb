# class PlayerCard
#   include Mongoid::Document

#   embeds_one :card, as: :cardable
# end

# class DealerCard
#   include Mongoid::Document

#   embeds_one :card, as: :cardable
# end

# class ShoeCard
#   include Mongoid::Document

#   embeds_one :card, as: :cardable
# end

class Card
  include Mongoid::Document
  include Mongoid::Timestamps

  field :face, type: String
  field :suite, type: String
  field :value, type: Integer
  field :alternate_value, type: Integer

  embedded_in :cardable, polymorphic: true
end
