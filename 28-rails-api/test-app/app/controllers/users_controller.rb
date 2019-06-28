class UsersController < ApplicationController
  def index
    @users = User.all
    byebug
    render json: @users, except: [:password, :created_at, :updated_at], include: [{:comments => {except: [:user_id]}}]
  end
end
