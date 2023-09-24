class AddBalanceToUsersAndPlayers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :balance, :decimal, precision: 15, scale: 2, default: 0.00
    add_column :players, :buy_in_balance, :decimal, precision: 15, scale: 2, default: 0.00
  end
end
