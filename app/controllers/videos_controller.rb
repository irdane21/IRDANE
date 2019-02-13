class VideosController < ApplicationController
  before_action :find_by_id, only: [:show, :edit, :update, :destroy]
  skip_before_action :authenticate_user!, only: [:index, :show]

  def index
    @creativ = Video.where(collection: "Creativ Construction").sort{ |a,b| b.created_at <=> a.created_at}
    @adrien = Video.where(collection: "Adrien Lefrancq").sort{ |a,b| b.created_at <=> a.created_at}
  end

  def show
  end

  def new
    @video = Video.new
  end

  def create
    @video = Video.new(video_params)
    if @video.save
      redirect_to dashboard_path
    else
      render :new
    end
  end

  def edit

  end

  def update
    if @video.update(video_params)
      redirect_to dashboard_path
    else
      render :edit
    end
  end

  def destroy
    @video.destroy
    redirect_to dashboard_path
  end

  private

  def find_by_id
    @video = Video.find(params[:id])
  end

  def video_params
    params.require(:video).permit(:title, :url, :photo, :photo_cache, :description, :collection )
  end
end

