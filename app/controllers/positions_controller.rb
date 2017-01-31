class PositionsController < ApplicationController

  def details
    position = Position.find_by(symbol: params[:id])
    render json: position
  end

  private

  def position_params
    params.require(:position).permit(:symbol)
  end

end
