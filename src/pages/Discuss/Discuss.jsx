import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Discuss.css';

const discussions = [
  { id: 1, title: "How to solve DP problems efficiently?", author: "CodeKing", replies: 42, views: "1.2k", category: "Algorithms" },
  { id: 2, title: "My experience with Google Interview 2026", author: "DevPro", replies: 156, views: "5.4k", category: "Interview" },
  { id: 3, title: "Python vs C++ for Competitive Programming", author: "PyDev", replies: 89, views: "2.8k", category: "General" },
  { id: 4, title: "Check out my new Binary Tree visualizer!", author: "Visualizer", replies: 12, views: "400", category: "Showcase" },
];

const Discuss = () => {
  return (
    <div className="discuss-page">
      <Navbar />
      <main className="container">
        <header className="discuss-header">
          <h1>Community <span className="gradient-text">Forum</span></h1>
          <button className="btn-primary">New Post</button>
        </header>

        <div className="forum-layout">
          <aside className="forum-sidebar glass">
            <h3>Categories</h3>
            <ul>
              <li className="active">All Topics</li>
              <li>Algorithms</li>
              <li>Interviews</li>
              <li>Web Development</li>
              <li>General</li>
            </ul>
          </aside>

          <section className="forum-list">
            {discussions.map(post => (
              <div key={post.id} className="forum-card glass">
                <div className="post-main">
                  <span className="post-category">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>Started by <strong>{post.author}</strong></p>
                </div>
                <div className="post-meta">
                  <span>💬 {post.replies}</span>
                  <span>👁️ {post.views}</span>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Discuss;
