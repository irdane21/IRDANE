class GamesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :whack_a_mole]
  before_action :find_by_id, only: [:show, :edit, :update, :destroy]

  def index
    @games = Game.all
  end

  def whack_a_mole
    @parties_easy = Partie.where(game_id: params[:id], difficulty: "easy")
    @parties_hard = Partie.where(game_id: params[:id], difficulty: "hard")
    @parties_easy = @parties_easy.sort { |a,b| b.score <=> a.score}
    @parties_hard = @parties_hard.sort { |a,b| b.score <=> a.score}
    @parties_easy = @parties_easy.first(8)
    @parties_hard = @parties_hard.first(8)
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
