class AccountsController < ApplicationController
  before_action :authenticate_user!
  def dashboard
    @sites = Site.all
    @creations = Creation.all
    @videos = Video.all
    @articles = Article.all
  end

end
