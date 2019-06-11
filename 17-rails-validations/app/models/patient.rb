class Patient < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true
  has_many :appointments
end
