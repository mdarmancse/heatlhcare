import mongoose from 'mongoose';
const AppointmentSchema = new mongoose.Schema({
    patientName: { type: String, required: true },
    patientContact: { type: String, required: true },
    appointmentDateTime: { type: Date, required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true }
});
export default mongoose.model('Appointment', AppointmentSchema);
