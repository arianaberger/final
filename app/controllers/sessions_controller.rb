class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @user = User.find_by(email: params[:user][:email])

    if @user && @user.authenticate(params[:password])
      render json: @user
    else
      render json: {
        error: "Invalid credentials"
      }, status: :unauthorized
    end
  end

  def delete
  end
end
