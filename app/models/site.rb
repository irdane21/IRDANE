class Site < ApplicationRecord
  mount_uploader :photo, PhotoUploader
end
