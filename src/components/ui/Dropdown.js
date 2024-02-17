import React from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@radix-ui/react-dropdown-menu';

export const Trigger = ({ children }) => {
  return (
    <DropdownMenuTrigger className="w-xxl">
      <div className="flex justify-center bg-lightgray rounded shadow-md">{children}</div>
    </DropdownMenuTrigger>
  );
};

export const Dropdown = ({ children }) => {
  return <DropdownMenu>{children}</DropdownMenu>;
};

export const Content = ({ children }) => {
  return (
    <DropdownMenuContent className="bg-lightgray w-xxl pt-3 pb-1 mt-1 rounded-lg z-50 shadow-xl">
      {children}
    </DropdownMenuContent>
  );
};

export const Item = ({ children }) => {
  return (
    <DropdownMenuItem
      onSelect={(e) => {
        e.preventDefault();
      }}>
      {children}
    </DropdownMenuItem>
  );
};
