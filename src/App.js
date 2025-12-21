import React from 'react';
import ProfileCard from './components/ui/ProfileCard';

function App() {
  const userName = 'test user'; // Updated name

  return (
    <div className="App container py-5">
      <h1 className="text-center mb-4 text-secondary">E-Learning Platform</h1>
      <ProfileCard userName={userName} />
      <div className="text-center mt-4">
        <p className="text-muted">Explore your courses and track your progress.</p>
        {/* Placeholder for other dashboard content or navigation */}
        <button className="btn btn-primary mt-3">View My Courses</button>
      </div>
    </div>
  );
}

export default App;
