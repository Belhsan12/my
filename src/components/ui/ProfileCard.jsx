import React from 'react';

const ProfileCard = ({ userName, userRole = 'Student' }) => {
  return (
    <div className="card profile-card text-center p-4 mx-auto my-5" style={{ maxWidth: '400px' }}>
      <div className="card-body d-flex flex-column align-items-center">
        {/* Unicode User Icon */}
        <span className="profile-icon" role="img" aria-label="User icon">👤</span>
        <h5 className="card-title h4 mb-2 text-primary">{userName}</h5>
        <p className="card-text text-muted mb-3">Welcome to your E-Learning Dashboard!</p>
        <span className="badge badge-student">{userRole}</span>
      </div>
    </div>
  );
};

export default ProfileCard;
