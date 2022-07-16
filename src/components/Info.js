import React from 'react';
import Avatar from '../Images/avatar.jpeg';
import mailLogo from '../Images/Icon.png';
import linkedinLogo from '../Images/Vector.png';

function Info() {
  return (
    <div className="info">
      <img src={Avatar} alt="Avatar" className="info--avatar" />
      <h2>Boluwatife Ajose</h2>
      <h4>Frontend Developer</h4>
      <h5>
        <a href="#">boluwatifeajose.website</a>
      </h5>
      <div className="info--btns">
        <button className="info--btns_white">
          <img src={mailLogo} alt="Email-logo" /> Email
        </button>
        <button className="info--btns_blue">
          <img src={linkedinLogo} alt="LinkedIn-logo" /> LinkedIn
        </button>
      </div>
    </div>
  );
}

export default Info;
