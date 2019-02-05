class GamesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]
  before_action :find_by_id, only: [:show, :edit, :update, :destroy]

  def index
    @games = Game.all
  end

  def whack_a_mole
    @parties = Partie.where(game_id: params[:id])
    @parties.sort { |a,b| a.score <=> b.score}
    @parties = @parties.first(5)
  end

  def new
    @game = Game.new
  end

  def create
    @game = Game.new(params_games)
    if @game.save
      redirect_to dashboard_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @game.update(params_games)
      redirect_to dashboard_path
    else
      render :edit
    end
  end

  def destroy
    @game.destroy
    redirect_to dashboard_path
  end

  private

  def find_by_id
    @game = Game.find(params[:id])
  end

  def params_games
    params.require(:game).permit(:name)
  end
end
