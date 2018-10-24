class CreationsController < ApplicationController
  before_action :find_by_id, only: [:show, :edit, :update, :destroy]
  skip_before_action :authenticate_user!, only: [:index, :show]

  def index
    @creations = Creation.all
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
    @creation = Creation.find(params[:id])
  end

  def creation_params
    params.require(:creation).permit(:title, :url, :photo, :photo_cache, :type, :description )
  end

end
