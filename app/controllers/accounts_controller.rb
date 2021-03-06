class AccountsController < ApplicationController
  before_action :authenticate_user!
  def dashboard
    if user_signed_in?
      @sites = Site.all
      @creations = Creation.all
      @videos = Video.all
      @articles = Article.all
      @games = Game.all
    else
      redirect_to user_signed_in
    end
  end

end
