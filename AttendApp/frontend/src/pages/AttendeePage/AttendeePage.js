import React, { useState } from 'react';
import './AttendeePage.css';

function AttendeePage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('attendee');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const attendeeData = {
      firstName,
      lastName,
      company,
      email,
      phone,
      role,
      password,
    };

    try {
      const response = await fetch(
        'https://Attendapp-backend.cloud-stacks.com/api/attendees',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(attendeeData),
        }
      );

      if (response.ok) {
        setSuccess('Attendee invited successfully.');
        setError(null);
        setFirstName('');
        setLastName('');
        setCompany('');
        setEmail('');
        setPhone('');
        setRole('attendee');
        setPassword('');
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to invite attendee.');
        setSuccess(null);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      setSuccess(null);
    }
  };

  return (
    <div className="attendee-page">
      <nav className="sidebar">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <ul>
          <li className="active">
            <a href="#">
              <span className="icon">
                <img src="attendees-icon.png" alt="Attendees" />
              </span>
              <span className="label">Attendees</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <img src="events-icon.png" alt="Events" />
              </span>
              <span className="label">Events</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <img src="settings-icon.png" alt="Settings" />
              </span>
              <span className="label">Settings</span>
            </a>
          </li>
        </ul>
      </nav>
      <section className="content">
        <header>
          <div className="header-left">
            <h1>Attendee Management</h1>
            <h2>Manage your attendees and invitations</h2>
          </div>
          <div className="header-right">
            <input type="text" placeholder="Search..." />
            <div className="profile">
              <img
                src="user-profile.png"
                alt="User Profile"
                className="profile-img"
              />
            </div>
          </div>
        </header>
        <div className="tabs-and-steps">
          <div className="tabs">
            <button className="tab active">Invite</button>
            <button className="tab">Bulk Invitation</button>
          </div>
          <ul className="steps-indicator">
            <li className="step active">Step 1</li>
            <li className="step">Step 2</li>
            <li className="step">Step 3</li>
          </ul>
        </div>
        <form className="attendee-form" onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Family Name</label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </div>
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select
                id="role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="attendee">Attendee</option>
                <option value="speaker">Speaker</option>
                <option value="vip">VIP</option>
              </select>
            </div>
          </div>
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="invite-button">
            Invite Attendee
          </button>
        </form>
        <div className="main-content">
          <h1>Upload Invitation Template</h1>
          <p>Please download the template and upload the filled file.</p>
          <table>
            <thead>
              <tr>
                <th>Template Name</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Invitation Template</td>
                <td>
                  <a href="#" download>
                    Download
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="upload-button">Upload Template</button>
        </div>
        <div className="illustration">
          <img src="illustration.png" alt="Illustration" />
        </div>
      </section>
    </div>
  );
}

export default AttendeePage;