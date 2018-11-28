class SitephotosController < ApplicationController

  def index
    @sitephotos = Sitephoto.where(site_id: params[:id])
    @site = Site.find(params[:id])
  end

  def new
    @sitephoto = Sitephoto.new
    @site = Site.find(params[:id])
  end

  def create
    @sitephoto = Sitephoto.new(sitephoto_params)
    if @sitephoto.save
      redirect_to dashboard_path
    else
      render :new
    end
  end

  def destroy
    @sitephoto = Sitephoto.find(params[:id])
    @sitephoto.destroy
    redirect_to dashboard_path
  end

  private

  def sitephoto_params
    params.require(:sitephoto).permit(:photo, :photo_cache, :site_id)
  end

end
