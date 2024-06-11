import React, { useState } from 'react';
import styles from './header.scss';

const header = () => {
  return (
    <div className="site-header">
      <span className="sitelogo">Billing Software</span>
      <div className="site-navigation">
        <ul>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default header;
