class PortfoliosController < ApplicationController

  def index
    @portfolios = Portfolio.all
  end

  def show
    portfolio = Portfolio.find(params[:id])
  end

  def positions
    portfolio = Portfolio.find(portfolio_params)
    render json: portfolio.symbol_names
  end

  private

  def portfolio_params
    params.require(:portfolio).permit(:id)
  end

end
