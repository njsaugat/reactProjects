import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const lockIcon = <FontAwesomeIcon icon={faLock} />;
export default function Navbar({ itemsCount }) {
  return (
    <div className="navbar">
      <div className="shop-logo">Shopping Cart</div>
      <div className="lock">
        <span className="lock-icon">{lockIcon}</span>
        <span className="circle totalItems">{itemsCount}</span>
      </div>
    </div>
  );
}
