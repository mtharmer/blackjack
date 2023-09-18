class CreateTables < ActiveRecord::Migration[7.0]
  def change
    create_table :tables do |t|
      t.references :table_type, null: false, foreign_key: true
      t.string :unique_id

      t.timestamps
    end
  end
end
