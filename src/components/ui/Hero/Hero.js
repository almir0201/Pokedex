import React, { useState, useEffect } from 'react';
import { VerticalLayout } from '../VerticalLayout/VerticalLayout';
import { Paragraph } from '../Paragraph/Paragraph';
import { Headline } from '../Headline/Headline';
import { Button } from '../Button/Button';
import { Links } from '../Links/Links';

export const Hero = ({ paragraph, headline, buttonText, className }) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);
  return (
    <div className={className}>
      <VerticalLayout align="start">
        <Headline
          type={width > 1023 ? 'h1' : 'h5'}
          className="text-black font-karla tracking-widest !leading-7xl">
          {headline}
        </Headline>
        <Paragraph
          variant={width > 1279 ? '2xl' : 'xl'}
          className="text-black font-karla my-16 !leading-9">
          {paragraph}
        </Paragraph>
        <Links to="/Pokedex">
          <Button className="mx-auto lg:mr-auto lg:ml-0 text-lg">{buttonText}</Button>
        </Links>
      </VerticalLayout>
    </div>
  );
};
