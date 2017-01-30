class CreatePortfolios < ActiveRecord::Migration[5.0]
  def change
    create_table :portfolios do |t|
      t.references :user

      t.timestamps
    end
  end
end
