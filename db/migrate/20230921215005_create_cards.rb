class CreateCards < ActiveRecord::Migration[7.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.integer :value
      t.integer :alternate_value
      t.references :cardable, polymorphic: true, null: false

      t.timestamps
    end
  end
end
