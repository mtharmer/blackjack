module CardHitter
  def hit
    card = Card.where(table_id: self.table_id, cardable_type: 'Shoe')&.first
    card.update!(cardable_type: self.class.to_s, cardable_id: self.id) unless card.nil?
    card
  end
end
