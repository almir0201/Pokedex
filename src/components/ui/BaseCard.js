import React from 'react';
import { Cardtag } from './Cardtag';
import { Cardprop } from './Cardprop';
import { AspectRatio } from './AspectRatio';
import { CardContentContainer } from './CardContentContainer';
import { Paragraph } from './Paragraph';

export const BaseCard = ({ title, imageSrc, imageAlt, powerStats, cardtagTypes }) => {
  if (!powerStats.length) return null;
  if (!cardtagTypes.length) return null;

  return (
    <CardContentContainer>
      <div className="flex justify-end mb-10 pl-6 relative">
        <div className="mt-2 ml-6 absolute left-0 top-0 w-1/2 z-10">
          <Paragraph className="font-bold leading-7">{title}</Paragraph>
          <div className="flex [&>*]:flex-1 mt-2 mb-2 gap-3 [&>*]:max-w-[50px]">
            {powerStats?.map((data, index) => (
              <Cardprop key={index} value={data.value} label={data.label} />
            ))}
          </div>
          <div className="flex gap-3 text-xs -mr-10 pb-3">
            {cardtagTypes.map((data, index) => (
              <Cardtag key={index} variant={data.variant}>
                {data.label}
              </Cardtag>
            ))}
          </div>
        </div>
        <div className="red-gradient w-full basis-2/3 pr-4 pl-12 rounded-r-lg">
          <AspectRatio variant="1/1">
            <img src={imageSrc} alt={imageAlt} />
          </AspectRatio>
        </div>
      </div>
    </CardContentContainer>
  );
};
