import React from 'react';
import { Link } from 'react-router-dom';
import { Paragraph } from '../ui/Paragraph/Paragraph';

export const HeaderItem = ({ children, to }) => {
  return (
    <div>
      <Link to={to}>
        <Paragraph variant="xl" font="font-karla">
          {children}
        </Paragraph>
      </Link>
    </div>
  );
};
