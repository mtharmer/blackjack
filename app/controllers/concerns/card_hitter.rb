module CardHitter
  def hit
    card = Card.where(table_id: self.table_id, cardable_type: 'Shoe').first.update(cardable_type: self.class.to_s, cardable_id: self.id)
    card
    # self.cards
    # return_object = self.attributes
    # return_object["cards"] = self.cards.map { |card| card.attributes }
    # return_object
  end
end
