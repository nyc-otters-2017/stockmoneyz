class PortfoliosController < ApplicationController

  def index
  end

  def list
    require_user
    render json: current_user.portfolios
  end

 def create
    current_user.portfolios.positions.new(position_params)
  end





  def positions
    require_user
    portfolio = current_user.portfolios.find(params[:id])
    url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22#{portfolio.symbol_names}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
    uri = URI(url)
    response = Net::HTTP.get(uri)
    render json: JSON.parse(response)
  end

  private

  def portfolio_params
    params.require(:portfolio).permit(:id)
  end


  def position_params
    params.require(:position).permit(:symbol, :buy_price, :num_shares)
  end

end
