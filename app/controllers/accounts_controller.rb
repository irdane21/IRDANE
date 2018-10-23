class AccountsController < ApplicationController

  def dashboard
    @sites = Site.all
    @creations = Creation.all
    @videos = Video.all
    @articles = Article.all
  end

end
