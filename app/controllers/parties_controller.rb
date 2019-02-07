class PartiesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:create]

  def create
    @partie = Partie.new(params_partie)
    if @partie.save
      return true
    else
      return "Error: We couldn't save your score..."
    end
  end

  private

  def params_partie
    params.require(:partie).permit(:name, :game, :score, :difficulty)
  end
end
