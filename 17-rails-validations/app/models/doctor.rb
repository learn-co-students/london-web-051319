class Doctor < ApplicationRecord
  validates :name, presence: true
  belongs_to :specialism
  has_many :appointments

  def name_specialism
    "#{self.name} - #{self.specialism.name}"
  end
end
