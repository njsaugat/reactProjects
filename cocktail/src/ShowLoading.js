import React from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const spinIcon = <FontAwesomeIcon icon={faCircleNotch} />;

export default function ShowLoading() {
  return <div className="loading">{spinIcon}</div>;
}
