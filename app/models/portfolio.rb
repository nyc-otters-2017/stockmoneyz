class Portfolio < ApplicationRecord
  has_many :positions
  belongs_to :user

  def symbol_names
    symbols = []
    positions.each do |pos|
      symbols << pos.symbol
    end
    symbols.join('%22,%20%22')
  end

end
