class SitesController < ApplicationController
  before_action :find_by_id, only: [:show, :edit, :update, :destroy]
  skip_before_action :authenticate_user!, only: [:index, :show]

  def index
    @sites = Site.all.sort{ |a,b| b.created_at <=> a.created_at}
  end

  def show
  end

  def new
    @site = Site.new
  end

  def create
    @site = Site.new(site_params)
    if @site.save
      redirect_to dashboard_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @site.update(site_params)
      redirect_to dashboard_path
    else
      render :edit
    end
  end

  def destroy
    @site.destroy
    redirect_to dashboard_path
  end

  private

  def find_by_id
    @site = Site.find(params[:id])
  end

  def site_params
    params.require(:site).permit(:title, :url, :photo, :photo_cache, :type, :description )
  end
end
