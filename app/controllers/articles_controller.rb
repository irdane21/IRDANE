class ArticlesController < ApplicationController
  before_action :find_by_id, only: [:show, :edit, :update, :destroy]
  skip_before_action :authenticate_user!, only: [:index, :show]

  def index
    @articles = Article.all.sort{ |a,b| b.created_at <=> a.created_at}
  end

  def show
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      redirect_to dashboard_path
    else
      render :new
    end
  end

  def edit

  end

  def update
    if @article.update(article_params)
      redirect_to dashboard_path
    else
      render :edit
    end
  end

  def destroy
    @article.destroy
    redirect_to dashboard_path
  end

  private

  def find_by_id
    @article = Article.find(params[:id])
  end

  def article_params
    params.require(:article).permit(:title, :url, :photo, :photo_cache, :type, :description )
  end
end
