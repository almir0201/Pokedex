import React from 'react';
import { Link } from 'react-router-dom';
import { Paragraph } from './Paragraph';

export const HeaderItem = ({ children }) => {
  return (
    <div>
      <Link href="/">
        <Paragraph variant="xl" font="font-karla">
          {children}
        </Paragraph>
      </Link>
    </div>
  );
};
