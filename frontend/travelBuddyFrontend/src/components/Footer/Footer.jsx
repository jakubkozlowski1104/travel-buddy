import React from 'react';
import { StyledFooter } from './Footer.styles';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="center">
        <div className="info">
          Copyright © 2024 TravelBuddy. All Rights Reserved.
        </div>
        <div className="owner">Owner: Jakub Kozłowski</div>
        <div className="contact">
          You can contact with us by - email: j.kozlowski@t.buddy.com | phone:
          +48 517 761 404
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
