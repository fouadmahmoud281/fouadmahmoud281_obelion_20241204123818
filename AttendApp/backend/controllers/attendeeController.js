const Attendee = require('../models/Attendee');

const getAllAttendees = async (req, res) => {
  try {
    const attendees = await Attendee.findAll();
    res.status(200).json(attendees);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve attendees' });
  }
};

const getAttendeeById = async (req, res) => {
  try {
    const id = req.params.id;
    const attendee = await Attendee.findByPk(id);
    if (!attendee) {
      return res.status(404).json({ error: 'Attendee not found' });
    }
    res.status(200).json(attendee);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve attendee' });
  }
};

const createAttendee = async (req, res) => {
  try {
    const { firstName, lastName, company, email, phone, role, password } = req.body;

    const existingAttendee = await Attendee.findOne({ where: { email } });
    if (existingAttendee) {
      return res.status(400).json({ error: 'Attendee with this email already exists' });
    }

    const attendee = await Attendee.create({
      firstName,
      lastName,
      company,
      email,
      phone,
      role,
      password,
    });

    res.status(201).json(attendee);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create attendee' });
  }
};

const updateAttendee = async (req, res) => {
  try {
    const id = req.params.id;
    const { firstName, lastName, company, email, phone, role, password } = req.body;

    const attendee = await Attendee.findByPk(id);
    if (!attendee) {
      return res.status(404).json({ error: 'Attendee not found' });
    }

    await attendee.update({
      firstName,
      lastName,
      company,
      email,
      phone,
      role,
      password,
    });

    res.status(200).json(attendee);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update attendee' });
  }
};

const deleteAttendee = async (req, res) => {
  try {
    const id = req.params.id;
    const attendee = await Attendee.findByPk(id);
    if (!attendee) {
      return res.status(404).json({ error: 'Attendee not found' });
    }

    await attendee.destroy();
    res.status(200).json({ message: 'Attendee deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete attendee' });
  }
};

module.exports = {
  getAllAttendees,
  getAttendeeById,
  createAttendee,
  updateAttendee,
  deleteAttendee,
};
