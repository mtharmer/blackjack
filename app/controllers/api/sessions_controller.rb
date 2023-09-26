class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by(username: session_params[:username])
    if @user && @user.authenticate(session_params[:password])
      login!
      # session[:user_id] = @user.id
      render json: { logged_in: true, user: @user }
    else
      render json: @user.errors, status: :unauthorized
    end
  end

  def destroy
    logout!
    render json: { logged_out: true }
  end

  def logged_in?
    if is_logged_in? && current_user
      render json: { logged_in: true, user: current_user }
    else
      render json: { logged_in: false }
    end
  end

  private

  def session_params
    params.require(:user).permit(:email, :username, :password)
  end
end
