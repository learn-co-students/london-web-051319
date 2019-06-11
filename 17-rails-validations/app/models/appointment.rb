class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :doctor

  validate :doctor_is_available
  validate :is_in_office_hours

  def doctor_is_available
    clashing_appt = self.doctor.appointments.find { |appt| appt.date == self.date && appt.time == self.time }
    if clashing_appt
      errors.add(:"doctor #{self.doctor.name}", 'is not available at that time')
    end
  end

  def is_in_office_hours
    hour = self.time.to_i
    if hour < 9 || hour > 16
      errors.add(:time, 'must be between 09:00 and 17:00')
    end
  end
end
