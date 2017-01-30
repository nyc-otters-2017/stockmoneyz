class User < ApplicationRecord
  has_many :positions
  has_many :portfolios

  validates :username, :email, :password, presence: true

  has_secure_password
end
