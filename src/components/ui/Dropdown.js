import React from 'react';
import { Paragraph } from './Paragraph';
import arrowfilter from '../../icons/ArrowFilter.svg';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@radix-ui/react-dropdown-menu';
import { Checkbox } from './Checkbox';

export const Dropdown = ({ label }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button className="bg-lightgray rounded shadow-md px-13 py-0 w-full">
          <div className="flex justify-center">
            <Paragraph className="flex-1" variant="md" font="sanspro">
              {label}
            </Paragraph>
            <img className="mr-2" src={arrowfilter} alt="" />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Checkbox className="col-span-4" label="Electric" />
          <Checkbox className="col-span-4" label="Electric" />
          <Checkbox className="col-span-4" label="Electric" />
          <Checkbox className="col-span-4" label="Electric" />
          <Checkbox className="col-span-4" label="Electric" />
          <Checkbox className="col-span-4" label="Electric" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
