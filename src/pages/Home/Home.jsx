import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ProblemCard from '../../components/ProblemCard/ProblemCard';
import './Home.css';

const problems = [
  { id: 1, title: "List Reversal", difficulty: "Easy", acceptance: 95, tags: ["List", "Basics"] },
  { id: 2, title: "Dictionary Merging", difficulty: "Easy", acceptance: 82, tags: ["Dictionary", "Data Structures"] },
  { id: 3, title: "Sieve of Eratosthenes", difficulty: "Medium", acceptance: 55, tags: ["Algorithm", "Math"] },
  { id: 4, title: "Decorators Mastery", difficulty: "Hard", acceptance: 30, tags: ["Decorators", "Advanced"] },
  { id: 5, title: "JSON Parser", difficulty: "Medium", acceptance: 65, tags: ["String", "Recursion"] },
  { id: 6, title: "Fast Power Algorithm", difficulty: "Medium", acceptance: 48, tags: ["Math", "Recursion"] },
];

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <header className="hero container">
        <h1 className="hero-title">Master Your <span className="gradient-text">Coding Skills</span></h1>
        <p className="hero-subtitle">Level up with our curated collection of coding challenges. Practice, compete, and get hired.</p>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-value">500+</span>
            <span className="stat-label">Problems</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">10k+</span>
            <span className="stat-label">Users</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">50k+</span>
            <span className="stat-label">Submissions</span>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="problem-section">
          <div className="section-header">
            <h2>Popular Challenges</h2>
            <div className="filters">
              <button className="filter-btn active">All</button>
              <button className="filter-btn">Arrays</button>
              <button className="filter-btn">Strings</button>
              <button className="filter-btn">Dynamic Programming</button>
            </div>
          </div>
          <div className="problem-grid">
            {problems.map((p, i) => (
              <ProblemCard key={i} {...p} />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer container">
        <p>&copy; 2026 CodeFlow. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
