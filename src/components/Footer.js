import React from 'react';
import twitterLogo from '../Images/Twitter-Icon.png';
import facebookLogo from '../Images/Facebook-Icon.png';
import instagramLogo from '../Images/Instagram-Icon.png';
import githubLogo from '../Images/GitHub-Icon.png';

function Footer() {
  return (
    <footer className="footer">
      <img src={twitterLogo} alt="twitter-icon" />
      <img src={facebookLogo} alt="facebok-icon" />
      <img src={instagramLogo} alt="instagram-icon" />
      <img src={githubLogo} alt="github-icon" />
    </footer>
  );
}

export default Footer;
