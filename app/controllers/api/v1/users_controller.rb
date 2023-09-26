class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find_by(username: user_params[:user][:username])
  end

  def create
    @user = User.new(user_params)
    #   email: params[:email],
    #   username: params[:username],
    #   password: params[:password],
    #   password_confirmation: params[:password_confirmation]
    # )
    if @user.save
      login!
      render json: @user
    else
      render json: @user.errors, status: :bad_request
    end
  end

  def edit
  end

  def delete
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password, :password_confirmation)
  end
end
