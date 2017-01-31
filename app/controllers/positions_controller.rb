class PositionsController < ApplicationController

  def details
    position = current_user.positions.find_by(symbol: params[:symbol])
    render json: {numShares: position.num_shares, buyPrice: position.buy_price}
  end


end
