class PositionsController < ApplicationController

  def details
    portfolio = current_user.portfolios.find(params[:portfolio_id])
    position = portfolio.positions.find_by(symbol: params[:symbol])
    render json: {numShares: position.num_shares, buyPrice: position.buy_price}
  end

  def update
    portfolio = current_user.portfolios.find(params[:portfolio_id])
    position = portfolio.positions.find_by(symbol: params[:symbol])
    total = position.num_shares - position_params.first.last.to_i
    if position.update_attribute(:num_shares, total)
      if position.num_shares <= 0
        position.destroy
      end
      redirect_to user_portfolios_path
    else
      render nothing: true, status: 404
    end
  end

  private

  def position_params
    params.require(:position).permit(:num_shares)
  end

end
