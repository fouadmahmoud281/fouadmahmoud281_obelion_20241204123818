const express = require('express');
const router = express.Router();
const {
  getAllAttendees,
  getAttendeeById,
  createAttendee,
  updateAttendee,
  deleteAttendee,
} = require('../controllers/attendeeController');

router.get('/attendees', getAllAttendees);
router.get('/attendees/:id', getAttendeeById);
router.post('/attendees', createAttendee);
router.put('/attendees/:id', updateAttendee);
router.delete('/attendees/:id', deleteAttendee);

module.exports = router;
