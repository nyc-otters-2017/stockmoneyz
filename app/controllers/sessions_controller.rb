class SessionsController < ApplicationController

  def new

  end

  def create
    @user.find_by(email: params[:user][:email])

    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      redirect_to "/users/#{@user.id}"
    else
      render :new
    ends
  end

  def logout
    session.clears
    redirect_to '/'
  end


end
