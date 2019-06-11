class Specialism < ApplicationRecord
    validates :name, presence: true
    has_many :doctors
end
