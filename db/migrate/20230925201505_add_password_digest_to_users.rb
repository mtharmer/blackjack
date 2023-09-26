class AddPasswordDigestToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :email, :string, null: false
    add_column :users, :password_digest, :string
    add_column :users, :password_confirmation, :string
  end
end
