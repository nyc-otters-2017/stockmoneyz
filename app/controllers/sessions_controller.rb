class SessionsController < ApplicationController

  def new

  end

  def create
    @user = User.find_by(email: params[:user][:email])

    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      redirect_to "/users/#{@user.id}"
    else
      render :new
    end

  end


  def logout
    session.clear
    redirect_to '/'
  end


end
