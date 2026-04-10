import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ProblemDetail from './pages/ProblemDetail/ProblemDetail';
import Contests from './pages/Contests/Contests';
import Discuss from './pages/Discuss/Discuss';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problem/:id" element={<ProblemDetail />} />
          <Route path="/contests" element={<Contests />} />
          <Route path="/discuss" element={<Discuss />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
