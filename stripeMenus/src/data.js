// import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faBriefcase,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const FaCreditCard = <FontAwesomeIcon icon={faCreditCard} />;
const FaBook = <FontAwesomeIcon icon={faBook} />;
const FaBriefcase = <FontAwesomeIcon icon={faBriefcase} />;
const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'payment', icon: FaCreditCard, url: '/products' },
      { label: 'terminal', icon: FaCreditCard, url: '/products' },
      { label: 'connect', icon: FaCreditCard, url: '/products' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', icon: FaBook, url: '/products' },
      { label: 'libraries', icon: FaBook, url: '/products' },
      { label: 'help', icon: FaBook, url: '/products' },
      { label: 'billing', icon: FaBook, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: FaBriefcase, url: '/products' },
      { label: 'customers', icon: FaBriefcase, url: '/products' },
    ],
  },
];

export default sublinks;
