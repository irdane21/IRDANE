class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :downloadFile, :newdesign]

  def home
  end

  def downloadFile
    send_file(
    "#{Rails.root}/public/Adrien LEFRANCQ CV.pdf",
    filename: "Adrien_Lefrancq_CV.pdf",
    type: "application/pdf"
    )
  end
end
