class CreateShoes < ActiveRecord::Migration[7.0]
  def change
    create_table :shoes do |t|
      t.references :table, null: false, foreign_key: true

      t.timestamps
    end
  end
end
