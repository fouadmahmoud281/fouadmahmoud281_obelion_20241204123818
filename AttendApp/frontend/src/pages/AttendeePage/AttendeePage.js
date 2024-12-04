import React from 'react';
import './AttendeePage.css';

function AttendeePage() {
  return (
    <div className="attendee-page">
      <div className="sidebar">
        <div className="logo">
          <h2>Logo</h2>
        </div>
        <ul className="nav-links">
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Agenda</a></li>
          <li className="active"><a href="#">Attendees</a></li>
          {/* Other navigation items */}
        </ul>
      </div>
      <div className="main-content">
        <header className="top-bar">
          <form className="search-bar">
            <input type="search" placeholder="Search..." />
          </form>
        </header>
        <div className="content-area">
          <h1>Attendee Details</h1>
          <form className="attendee-form">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" value="Ahmed" />
            </div>
            <div className="form-group">
              <label>Family Name</label>
              <input type="text" value="Saad" />
            </div>
            <div className="form-group">
              <label>Company</label>
              <input type="text" value="XYZ Corp" />
            </div>
            <div className="form-group">
              <label>Occupation</label>
              <input type="text" value="Engineer" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" value="ahmed.saad@example.com" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" value="+1234567890" />
            </div>
            <footer className="form-footer">
              <button type="button" className="cancel-button">Cancel</button>
              <button type="submit" className="save-button">Save</button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AttendeePage;
