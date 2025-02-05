import Appointment from '../models/Appointment.js';
export async function createAppointment(req, res) {
    try {
        const { patientName, patientContact, appointmentDateTime, doctorId } = req.body;

        if (!patientName || !patientContact || !appointmentDateTime || !doctorId) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const appointmentDate = new Date(appointmentDateTime);
        if (isNaN(appointmentDate.getTime()) || appointmentDate <= new Date()) {
            return res.status(400).json({ message: 'Appointment date must be a valid future date' });
        }

        const newAppointment = new Appointment({ patientName, patientContact, appointmentDateTime, doctorId });
        await newAppointment.save();

        res.status(201).json({ message: 'Appointment created successfully', appointment: newAppointment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getAppointments(req, res) {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export async function getAppointmentById(req, res) {
    try {
        const appointment = await Appointment.findById(req.params.id);
        if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
        res.json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export async function updateAppointment(req, res) {
    try {
        const { appointmentDateTime } = req.body;

        if (appointmentDateTime) {
            const appointmentDate = new Date(appointmentDateTime);
            if (isNaN(appointmentDate.getTime()) || appointmentDate <= new Date()) {
                return res.status(400).json({ message: 'Appointment date must be a valid future date' });
            }
        }

        const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedAppointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        res.json({ message: 'Appointment updated successfully', appointment: updatedAppointment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function deleteAppointment(req, res) {
    try {
        const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);
        if (!deletedAppointment) return res.status(404).json({ message: 'Appointment not found' });
        res.json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}