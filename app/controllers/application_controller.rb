# frozen_string_literal: true

class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  helper_method :login!, :logout!, :is_logged_in?, :current_user, :authorized?, :set_user
  def login!
    session[:user_id] = @user.id
  end

  def logout!
    session.clear
  end

  def is_logged_in?
    !!session[:user_id]
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def authorized?
    @user == current_user
  end

  def set_user
    @user = User.find_by(id: session[:user_id])
  end
end
