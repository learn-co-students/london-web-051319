class Doctor < ApplicationRecord
  belongs_to :specialism
  has_many :appointments

  def name_specialism
    "#{self.name} - #{self.specialism.name}"
  end
end
