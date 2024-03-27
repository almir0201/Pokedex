import React from 'react';
import { Link } from 'react-router-dom';
import { Paragraph } from '../Paragraph/Paragraph';

export const Links = ({ children, to }) => {
  return (
    <Link to={to}>
      <Paragraph variant="xl" font="font-karla">
        {children}
      </Paragraph>
    </Link>
  );
};
