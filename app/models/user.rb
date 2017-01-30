class User < ApplicationRecord
  has_many :positions
  has_many :portfolios

  validates :full_name, :email, :password, :presence => true

  has_secure_password
end
