Software Requirements Specification (SRS)  Platform Name: Attend  Purpose: Event Management Platform for Corporates  Stakeholders:  •   Corporate Event Organizers  •   Venue Owners  •   Event Suppliers  •   Attend Super Admin  Software Requirements Specification (SRS) for   Attend Platform  1. Introduction  The Attend platform is a comprehensive event management solution for corporate users,  providing a streamlined interface for event planning, agenda preparation, attendee  management, venue and supplier bookings, and budget tracking. It supports corporate  org anizers in efficiently managing events from planning through execution, with additional  capabilities for stakeholders such as venue owners, suppliers, and platform administrators  (super admin).  1.1 Purpose  The purpose of this document is to define the requirements for the Attend platform,  describing functionalities for corporate organizers, venue owners, suppliers, and super  admin, to ensure all stakeholders have the necessary tools and features for efficien t event  management.  1.2 Stakeholders  1.   Corporate Organizers: Plan and manage corporate events.  2.   Venue Owners: List and manage venue bookings.  3.   Suppliers: Offer event - related services (e.g., gifts, printing, transportation) in the  marketplace.  4.   Super Admin: Oversee platform activity, user management, and maintain system  integrity.
2. System Overview  The Attend platform includes key modules:  1.   User Authentication: Register, login, password management, and Google social login.  2.   Event Management: Create and manage events in   four steps, assign multiple  organizers, and gain insights.  3.   Marketplace: Browse, book, and track venues and suppliers.  4.   Order Management: Centralized tracking of all bookings and orders with ratings.  5.   Attendee and Invitation Management: Manage attendees, send invites, track RSVPs,  and customize invitation content.  6.   Public Event Page: Generate a shareable event page with reservation capability.  7.   Settings and Configuration: Manage location, language, currency, and other event -  specific settings.  3. Functional Requirements  3.1 User Authentication and Access  3.1.1 User Registration and Login  •   Registration: Corporate organizers register by providing first name, family name,  email, phone number, password, and confirm password.  •   Login Options: Users can log in using their email, phone number, or Google social  login.  •   Password Recovery: An option to reset the password via email.  3.1.2 Role Management  •   Add Organizers: Primary organizer can add additional organizers with permissions to  manage specific modules of the event.  3.1. 3   Support  •   Organizer can ask for expert consultation and get help to organize its event by  sending request for attend's experts  3.2 Event Management  3.2.1 Event Creation (Four - Step Process)
1.   Step 1   -   Basic Information:  o   Event Name, Location, Date and   Time, Number of Attendees, Initial Budget.  2.   Step 2   -   Venue Selection:  o   Define Venue Type, Location, Required Amenities, and Venue Budget.  o   Organizers browse the venue marketplace to select a suitable option based  on their criteria.  3.   Step 3   -   Catering Details:  o   Define Preferred Cuisine, Service Type (e.g., buffet, plated), and Catering  Budget.  4.   Step 4   -   Supplier Services:  o   Select additional services required (e.g., gifts, printing, transportation,  audiovisual equipment, etc.).  o   Allocate a budget for   all   supplier's   service s .  3.2.2 Event Dashboard  •   Landing Page: Displays all events with the ability to create a new event.  •   Insights and Lessons Learned: Display metrics, key performance indicators, and post -  event learnings.  •   Settings: Customize language, location preferences, currency, etc.  3.3 Marketplace  3.3.1 Venue Marketplace  •   Venue Details: Name, Photos, Capacity, Distance, Location on Map, Amenities, Local  Attractions, Reviews, Ratings, and Estimated Costs.  •   Booking Request: Organizers can send booking requests for chosen venues and track  their status until confirmation.  3.3.2 Supplier Marketplace  •   Supplier Information: Name, Contact Information (email, website), Service/Product  Details, and Pricing.  •   Order and Tracking: Organizers can request or purchase services,   track order status,  and manage order history.  3.4   invoices   Management  •   Order Dashboard: Consolidated view of all venue and supplier orders.
•   Order Tracking: Track the status of each booking or order.  •   Review and Rating: Provide feedback for venues and suppliers based on service  quality.  3.5 Event Agenda Management  •   Agenda Structure: Add sessions and assign speakers for each event.  •   Editing Capabilities: Organizers can update, rearrange, or delete sessions.  3.6 Attendee and Invitation Management  3.6.1 Adding Attendees  •   Manual Addition: Add attendee details (first name, family name, email, company,  role, mobile, country, city).  •   Bulk Upload: Import attendee information through CSV or Excel files.  3.6.2 Invitations and RSVPs  •   Sending Invitations: Invitations sent via email or WhatsApp   through integration with  third   party.  •   Invitation Content Customization: Add customized content for invitation messages.  •   RSVP Tracking: Track RSVP status for each attendee.  3.7 Budget and Expense Tracking  •   Expense Management: Track and   allocate budget for venues, suppliers, catering, and  other event aspects.  •   Budget Insights: Display insights on budget allocation vs. actual spend.  3.8 Public Event Page  •   Event Page Content: Contains event name, description, agenda, location map, social  media URLs, logo, cover image.  •   Reservation Feature: Attendees can reserve seats directly through the public page.  •   Customization: Organizers manage and update page content as needed.  3.9 Stakeholder - Specific Interfaces  Each stakeholder has a unique interface to facilitate their role - specific tasks:  1.   Corporate Organizer Interface: Access event management   ,   venue booking, access  suppliers marketplace ,   budget tracking,   invoices tracking   and attendee s inviting and  tracking.
2.   Venue Owner Interface: Manage venue listings, respond to booking requests,  monitor feedback.  3.   Supplier Interface: Display services/products, handle requests, track orders.  4.   Super Admin Interface: Oversee platform operations, monitor user activity, and  manage roles and permissions.  4. Non - Functional Requirements  4.1 Usability  •   User - Friendly Interface: Simplified navigation   ( preferred side menu layout)   and a  responsive layout for desktops, tablets, and mobile devices.  4.2 Performance  •   Reliability: Ensure platform stability, especially during peak event scheduling times.  •   Scalability: Handle increasing numbers of events and users without degradation of  performance.  4.3 Security  •   Authentication and Authorization: Secure login with Google OAuth integration, role -  based access control.  •   Data   Encryption: Secure sensitive data, including user credentials and event  information.  •   Data Privacy: Personal information is encrypted, and only authorized users can  access specific data.  5 . Functional Workflow  1.   User Authentication and Role Management  o   New users register, and existing users log in via email, phone, or Google.  o   Organizers can add additional users with permissions for specific modules.  2.   Event Creation Process  o   Event details are entered in four steps, covering basic details, venue,  catering, and supplier services.
o   Organizers can browse and select venues and suppliers from the  marketplace.  3.   Marketplace and Order Management  o   Organizers browse venues and suppliers, submit booking requests, track  orders, and rate services.  4.   Attendee Management  o   Organizers can create the event agenda, add sessions, assign speakers, and  manage attendee RSVPs.  5.   Public Event Page Customization  o   Organizers update and manage the event’s public page content, sharing it  with attendees.  6 . Security Requirements  7.1 Authentication and Authorization  •   Secure authentication with Google OAuth and role - based access for different user  types.  7.2 Data Protection  •   Sensitive data is encrypted, including user credentials and attendee information.  7.3 Logging and Monitoring  •   Activity   logging for auditing purposes, with monitoring capabilities for the super  admin.  7 . Additional Considerations  •   Localization: The platform supports multiple languages, regions, and currencies.  •   Notification System: Notifications for booking updates, order status changes, and  RSVP updates.  •   Performance Monitoring: Regular performance testing to ensure reliability during  peak usage.  This SRS outlines a comprehensive structure and requirement list for developing and  implementing the Attend platform, ensuring all essential functionalities are covered for  effective corporate event management.

