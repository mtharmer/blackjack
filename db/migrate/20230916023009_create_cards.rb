class CreateCards < ActiveRecord::Migration[7.0]
  def change
    create_table :cards do |t|
      t.string :face, null: false
      t.string :suite, null: false
      t.integer :value, null: false
      t.integer :alternate_value
      t.index [:face, :suite], unique: true
    end
  end
end
