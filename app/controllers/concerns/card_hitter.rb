# frozen_string_literal: true

module CardHitter
  def hit
    card = Card.where(table_id: table_id, cardable_type: 'Shoe').first
    card&.update!(cardable_type: self.class.to_s, cardable_id: id)
    card
  end
end
