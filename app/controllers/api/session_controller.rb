class SessionController < ApplicationController

  def create
    @user = User.find(email: params[:email])

    if @ user && @authenticate(params[:password])
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
