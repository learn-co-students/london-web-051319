class PatientsController < ApplicationController

    def new
        @patient = Patient.new
    end

    def create
        patient = Patient.create patient_params
        if patient.valid?
            appointment = Appointment.create appointment_params
            appointment.patient = patient
            appointment.save
            if appointment.valid?
                redirect_to patient
            else
                flash[:errors] = appointment.errors.full_messages
                redirect_to new_appintment_path(patient_id: patient)
            end
        else
            flash[:errors] = patient.errors.full_messages
            redirect_to new_patient_path
        end
    end

    def show
        @patient = Patient.find params[:id]
    end

    private

    def patient_params
        params.require(:patient).permit(:name, :doctor_id)
    end

    def appointment_params
        params.require(:appointment).permit(:date,:time,:doctor_id)
    end
end
