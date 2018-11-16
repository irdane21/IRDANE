class ContactsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:new, :create]

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new()
    @contact.request = request
    if @contact.deliver
      flash.now[:error] = nil
    else
      flash.now[:error] = 'OUPS, une erreur est survenue, le message ne peut pas être envoyé...'
      render :new
    end
  end

  private

  # def contact_params
  #   params.require(:contact).permit(:title, :url, :photo, :photo_cache, :type, :description )
  # end

end
