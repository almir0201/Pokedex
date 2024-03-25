import React from 'react';
import { VerticalLayout } from '../VerticalLayout/VerticalLayout';
import { Paragraph } from '../Paragraph/Paragraph';
import { Headline } from '../Headline/Headline';
import { Button } from '../Button/Button';

export const Hero = ({ paragraph, headline, buttonText, width, className }) => {
  return (
    <div className={className}>
      <VerticalLayout align="start">
        <Headline
          type={`${width > 1023 ? 'h1' : 'h5'}`}
          className="text-black font-karla tracking-widest !leading-7xl">
          {headline}
        </Headline>
        <Paragraph
          variant={`${width > 1535 ? '2xl' : 'xl'}`}
          className="text-black font-karla my-16 !leading-9">
          {paragraph}
        </Paragraph>
        <Button className="mx-auto lg:mr-auto lg:ml-0">{buttonText}</Button>
      </VerticalLayout>
    </div>
  );
};
