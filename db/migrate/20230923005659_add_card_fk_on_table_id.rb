class AddCardFkOnTableId < ActiveRecord::Migration[7.0]
  def change
    add_reference :cards, :table, foreign_key: true
  end
end
