class VideosController < ApplicationController
  before_action :find_by_id, only: [:show, :edit, :update, :destroy]
  skip_before_action :authenticate_user!, only: [:index, :show]

  def index
    @creativs = Video.where(collection: "Creativ Construction")
    @adriens = Video.where(collection: "Adrien Lefrancq")
    @videos = Video.all
    raise
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
    if @video.update(site_params)
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
    params.require(:video).permit(:title, :url, :photo, :photo_cache, :type, :description, :collection )
  end
end
