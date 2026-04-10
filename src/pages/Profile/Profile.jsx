import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-page">
      <Navbar />
      <main className="container profile-container">
        <section className="profile-header glass">
          <div className="profile-img">Fouz</div>
          <div className="profile-info">
            <h1>Mohamed<span className="gradient-text">Fouzhan</span></h1>
            <p>Full Stack Developer | Python Enthusiast</p>
            <div className="badges">
              <span className="badge">⭐ Top 5%</span>
              <span className="badge">🔥 15 Day Streak</span>
              <span className="badge">🏆 Contest Winner</span>
            </div>
          </div>
          <button className="btn-edit">Edit Profile</button>
        </section>

        <div className="profile-grid">
          <section className="stats-panel glass">
            <h3>Statistics</h3>
            <div className="stats-grid">
              <div className="stat-box">
                <span className="val">142</span>
                <span className="lab">Solved</span>
              </div>
              <div className="stat-box">
                <span className="val">2100</span>
                <span className="lab">Rating</span>
              </div>
              <div className="stat-box">
                <span className="val">85%</span>
                <span className="lab">Accuracy</span>
              </div>
            </div>
          </section>

          <section className="solved-list glass">
            <h3>Recent Solved Problems</h3>
            <ul>
              <li><span>List Reversal</span> <span className="time">2 hours ago</span></li>
              <li><span>Dictionary Merging</span> <span className="time">1 day ago</span></li>
              <li><span>Two Sum</span> <span className="time">3 days ago</span></li>
              <li><span>Binary Search</span> <span className="time">1 week ago</span></li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Profile;
