class AccountsController < ApplicationController
  skip_before_action :authenticate_user!
  def dashboard
    if user_signed_in?
      @sites = Site.all
      @creations = Creation.all
      @videos = Video.all
      @articles = Article.all
    else
      redirect_to user_signed_in_path
    end
  end

end
