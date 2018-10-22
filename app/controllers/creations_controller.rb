class CreationsController < ApplicationController
before_action :find_by_id, only: [:show, :edit, :update, :destroy]

def index
  @creations = Creation.where(params[:type])
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
  params.require(:creation).permit(:title, :url, :photo, :type, :description )
end

end
