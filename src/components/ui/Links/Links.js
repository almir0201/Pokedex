import React from 'react';
import { Link } from 'react-router-dom';

export const Links = ({ children, to, className }) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};
