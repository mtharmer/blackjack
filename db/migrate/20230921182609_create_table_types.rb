class CreateTableTypes < ActiveRecord::Migration[7.0]
  def change
    create_table :table_types do |t|
      t.integer :buy_in_max, null: false
      t.integer :buy_in_min, null: false
      t.integer :ante, null: false

      t.timestamps
    end
  end
end
