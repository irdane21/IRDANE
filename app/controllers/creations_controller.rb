class CreationsController < ApplicationController
  before_action :find_by_id, only: [:show, :edit, :update, :destroy]
  skip_before_action :authenticate_user!, only: [:index, :show]

  def index
    @creations = Creation.all
  end

  def show
  end

  def new
    @creation = Creation.new
  end

  def create
    @creation = Creation.new(creation_params)
    if @creation.save
      redirect_to dashboard_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @creation.update(creation_params)
      redirect_to dashboard_path
    else
      render :edit
    end
  end

  def destroy
    @creation.destroy
    redirect_to dashboard_path
  end

  private

  def find_by_id
    @creation = Creation.find(params[:id])
  end

  def creation_params
    params.require(:creation).permit(:title, :url, :photo, :photo_cache, :type, :description )
  end

end

