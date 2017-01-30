class CreatePositions < ActiveRecord::Migration[5.0]
  def change
    create_table :positions do |t|
      t.integer :buy_price
      t.integer :num_shares
      t.string :symbol
      t.references :user
      t.references :portfolio

      t.timestamps
    end
  end
end
