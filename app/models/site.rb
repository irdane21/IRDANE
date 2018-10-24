class Site < ApplicationRecord
  has_many :sitephotos
  mount_uploader :photo, PhotoUploader
  validates :title, uniqueness: true
end
