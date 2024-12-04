import React, { useState, useEffect } from 'react';
import './AttendeeManagement.css';

function AttendeeManagement() {
  const [attendees, setAttendees] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const baseUrl = 'https://Attendapp-backend.cloud-stacks.com/api';

  useEffect(() => {
    fetch(`${baseUrl}/attendees`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch attendees');
        }
        return response.json();
      })
      .then((data) => {
        setAttendees(data);
      })
      .catch((error) => {
        setErrorMessage('Failed to fetch attendees');
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(`${baseUrl}/attendees`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        password: 'defaultPassword',
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to create attendee');
        }
        return response.json();
      })
      .then((data) => {
        setAttendees([...attendees, data]);
        setFormData({ firstName: '', lastName: '', email: '', phone: '' });
      })
      .catch((error) => {
        setErrorMessage('Failed to create attendee');
      });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleBulkUpload = () => {
    if (!file) {
      setErrorMessage('Please select a file');
      return;
    }
    const uploadData = new FormData();
    uploadData.append('file', file);

    fetch(`${baseUrl}/attendees/bulk-upload`, {
      method: 'POST',
      body: uploadData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to upload CSV');
        }
        return response.json();
      })
      .then((data) => {
        setAttendees([...attendees, ...data]);
        setFile(null);
      })
      .catch((error) => {
        setErrorMessage('Failed to upload CSV');
      });
  };

  const handleSendEmailInvitations = () => {
    fetch(`${baseUrl}/email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ attendees }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to send email invitations');
        }
        return response.json();
      })
      .then((data) => {})
      .catch((error) => {
        setErrorMessage('Failed to send email invitations');
      });
  };

  return (
    <div className="main-container">
      <nav className="sidebar">
        <ul>
          <li>
            <a href="/dashboard">
              <img src="icon-dashboard.svg" alt="Dashboard" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/agenda">
              <img src="icon-agenda.svg" alt="Agenda" />
              <span>Agenda</span>
            </a>
          </li>
          <li className="active">
            <a href="/attendees">
              <img src="icon-attendees.svg" alt="Attendees" />
              <span>Attendees</span>
            </a>
          </li>
        </ul>
      </nav>
      <section className="content-area">
        <div className="header">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="user-profile">
            <img src="profile-picture.jpg" alt="Profile" className="profile-icon" />
          </div>
          <div className="options-button">
            <button>Options</button>
          </div>
        </div>
        <div className="tabs-and-steps"></div>
        <div className="main-content">
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <h1>Attendee Management</h1>
          <p>Manage your attendees and send out invitations.</p>
          <div className="form-section">
            <form onSubmit={handleFormSubmit}>
              <div className="form-row">
                <div className="form-column">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                </div>
                <div className="form-column">
                  <label htmlFor="lastName">Family Name</label>
                  <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-column">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
                </div>
                <div className="form-column">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                </div>
              </div>
              <div className="form-actions">
                <button type="button" onClick={() => setFormData({ firstName: '', lastName: '', email: '', phone: '' })}>
                  Cancel
                </button>
                <button type="submit">Save</button>
              </div>
            </form>
          </div>
          <div className="bulk-upload">
            <a href="/template.csv" download>
              Download Template
            </a>
            <input type="file" name="bulkUpload" accept=".csv" onChange={handleFileChange} />
            <button type="button" onClick={handleBulkUpload}>
              Upload CSV
            </button>
          </div>
          <div className="attendee-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>RSVP Status</th>
                </tr>
              </thead>
              <tbody>
                {attendees.map((attendee) => (
                  <tr key={attendee.id}>
                    <td>
                      {attendee.firstName} {attendee.lastName}
                    </td>
                    <td>{attendee.email}</td>
                    <td>{attendee.phone}</td>
                    <td>{attendee.rsvpStatus || 'Pending'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="send-invitations">
            <button type="button" onClick={handleSendEmailInvitations}>
              Send Email Invitations
            </button>
            <button type="button">Send WhatsApp Invitations</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AttendeeManagement;