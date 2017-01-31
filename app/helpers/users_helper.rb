module UsersHelper
  def current_user
    @current_user ||= User.find_by(params[session[:user_id]])
  end
end
