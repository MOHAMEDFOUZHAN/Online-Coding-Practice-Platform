import React from 'react';
import { Link } from 'react-router-dom';
import './ProblemCard.css';

const ProblemCard = ({ id, title, difficulty, acceptance, tags }) => {
  const getDifficultyClass = () => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'diff-easy';
      case 'medium': return 'diff-medium';
      case 'hard': return 'diff-hard';
      default: return '';
    }
  };

  return (
    <div className="problem-card glass">
      <div className="card-header">
        <h3 className="problem-title">{title}</h3>
        <span className={`difficulty ${getDifficultyClass()}`}>{difficulty}</span>
      </div>
      <div className="card-body">
        <div className="stats">
          <span>Acceptance: <strong>{acceptance}%</strong></span>
        </div>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="card-footer">
        <Link to={`/problem/${id || '1'}`} className="btn-solve" style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}>
          Solve Challenge
        </Link>
      </div>
    </div>
  );
};

export default ProblemCard;
