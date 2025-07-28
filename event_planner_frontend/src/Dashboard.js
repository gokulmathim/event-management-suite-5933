import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import './components/Sidebar.css';
import './components/TopBar.css';

const MENU_ITEMS = [
  { key: "dashboard", label: "Dashboard", icon: "🏠" },
  { key: "events", label: "Events", icon: "📅" },
  { key: "attendees", label: "Attendees", icon: "🧑‍🤝‍🧑" },
  { key: "resources", label: "Resources", icon: "🗂️" },
  { key: "notifications", label: "Notifications", icon: "🔔" }
];
// tags: [PUBLIC_INTERFACE]
function Dashboard({ user, onLogout }) {
  /**
   * Main dashboard shell, handling layout and navigation
   * @param {object} user - current user
   * @param {function} onLogout - called when logout clicked
   */
  const [section, setSection] = useState("dashboard");
  const handleMenuSelect = useCallback((key) => setSection(key), []);
  const handleProfile = useCallback(() => alert('Profile click'), []);
  return (
    <div style={{display:"flex", minHeight:"100vh"}}>
      <Sidebar menuItems={MENU_ITEMS} activeItem={section} onSelect={handleMenuSelect} />
      <div style={{flex:1, marginLeft: 210, background: "var(--bg-primary)"}}>
        <TopBar
          title={MENU_ITEMS.find(i => i.key === section)?.label}
          user={user}
          onProfile={handleProfile}
          onLogout={onLogout}
        />
        <main style={{padding:"2em 2em 1.5em 2em"}}>
          {section === "dashboard" && <DashboardOverview />}
          {section === "events" && <EventsSection user={user} />}
          {section === "attendees" && <AttendeesSection user={user} />}
          {section === "resources" && <ResourcesSection user={user} />}
          {section === "notifications" && <NotificationsSection user={user} />}
        </main>
      </div>
    </div>
  );
}

// Placeholder content; you will expand these with real API data/interactions
function DashboardOverview() {
  return <div>
    <h2>Welcome!</h2>
    <p>This is your dashboard overview. Here you see stats and quick links for events and resources.</p>
  </div>;
}
function EventsSection() {
  return <div>
    <h2>Events</h2>
    <p>Browse, create, and manage events here.</p>
  </div>;
}
function AttendeesSection() {
  return <div>
    <h2>Attendee Management</h2>
    <p>View and manage attendees for your events.</p>
  </div>;
}
function ResourcesSection() {
  return <div>
    <h2>Resources</h2>
    <p>Manage rooms, equipment and other resources.</p>
  </div>;
}
function NotificationsSection() {
  return <div>
    <h2>Notifications</h2>
    <p>View alerts and reminders about your events.</p>
  </div>;
}
export default Dashboard;
