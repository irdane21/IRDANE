class Sitephoto < ApplicationRecord
  belongs_to :site
  mount_uploader :photo, PhotoUploader
end
