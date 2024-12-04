import React from 'react';
import './AttendeeManagement.css';

function AttendeeManagement() {
  return (
    <div className="attendee-management">
      <aside className="sidebar">
        <div className="logo">
          <h2>Logo</h2>
        </div>
        <nav>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Agenda</a></li>
            <li className="active"><a href="#">Attendees</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </nav>
      </aside>
      <div className="main-content">
        <header className="top-bar">
          <input type="search" placeholder="Search..." />
        </header>
        <section className="content">
          <h1>Attendee Details</h1>
          <h2>Edit Ahmed Saad</h2>
          <form>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" defaultValue="Ahmed" />
            </div>
            <div className="form-group">
              <label>Family Name</label>
              <input type="text" defaultValue="Saad" />
            </div>
            <div className="form-group">
              <label>Company</label>
              <input type="text" defaultValue="ABC Corp" />
            </div>
            <div className="form-group">
              <label>Title</label>
              <input type="text" defaultValue="Manager" />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <input type="text" defaultValue="Male" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" defaultValue="ahmed.saad@example.com" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" defaultValue="+1234567890" />
            </div>
            <footer>
              <button type="button" className="cancel-button">Cancel</button>
              <button type="submit" className="save-button">Save</button>
            </footer>
          </form>
        </section>
      </div>
    </div>
  );
}

export default AttendeeManagement;
