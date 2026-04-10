import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Contests.css';

const contests = [
  { id: 1, title: "Weekly Contest 382", date: "April 15, 2026", duration: "90 min", participants: 1200, status: "Register Now" },
  { id: 2, title: "Biweekly Contest 110", date: "April 18, 2026", duration: "90 min", participants: 850, status: "Register Now" },
  { id: 3, title: "Spring Coding Sprint", date: "May 2, 2026", duration: "3 hours", participants: 5000, status: "Coming Soon" },
];

const Contests = () => {
  return (
    <div className="contests-page">
      <Navbar />
      <main className="container">
        <header className="page-header">
          <h1>Active <span className="gradient-text">Contests</span></h1>
          <p>Compete with coders worldwide and win exciting prizes.</p>
        </header>

        <section className="contest-grid">
          {contests.map((c) => (
            <div key={c.id} className="contest-card glass">
              <div className="contest-info">
                <h3>{c.title}</h3>
                <p className="contest-date">📅 {c.date} • ⏱️ {c.duration}</p>
                <p className="contest-stats">👥 {c.participants} Coders Registered</p>
              </div>
              <button className={`btn-contest ${c.id === 1 ? 'active' : ''}`}>
                {c.status}
              </button>
            </div>
          ))}
        </section>

        <section className="past-contests">
          <h2>Past Contests</h2>
          <div className="past-list">
            {[1, 2, 3].map(id => (
              <div key={id} className="past-item glass">
                <span>Coders Cup #{120 - id}</span>
                <button className="btn-view">View Results</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contests;
