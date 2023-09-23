class CreatePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.string :username, null: false
      t.references :table, null: false, foreign_key: true

      t.timestamps
    end
  end
end
