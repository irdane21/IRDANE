class Video < ApplicationRecord
  mount_uploader :photo, PhotoUploader
  validates :title, uniqueness: true
end
