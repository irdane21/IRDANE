class VideosController < ApplicationController
  before_action :find_by_id, only: [:show, :edit, :update, :destroy]
  skip_before_action :authenticate_user!, only: [:index, :show]

  def index
    @videos = Video.all
  end

  def show
  end

  def new
  end

  def create
  end

  def edit

  end

  def update
  end

  def destroy
  end

  private

  def find_by_id
    @video = Video.find(params[:id])
  end

  def video_params
    params.require(:video).permit(:title, :url, :photo, :type, :description )
  end
end
