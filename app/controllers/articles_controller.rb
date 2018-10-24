class ArticlesController < ApplicationController
  before_action :find_by_id, only: [:show, :edit, :update, :destroy]
  skip_before_action :authenticate_user!, only: [:index, :show]

  def index
    @articles = Article.all
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
    @article = Article.find(params[:id])
  end

  def article_params
    params.require(:article).permit(:title, :url, :photo, :photo_cache, :type, :description )
  end
end
