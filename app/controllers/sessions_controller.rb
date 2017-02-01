class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by(email: params[:user][:email])

    if @user && @user.authenticate(params[:user][:password])
      login @user
      redirect_to user_portfolios_url(user_id: @user.id)
    else
      render :new
    end

  end

  def logout
    session.delete(:user_id)
    redirect_to '/'
  end

  private

  def login_param_email
    params.require(:user).permit(:email)
  end




end
