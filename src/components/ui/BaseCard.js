import React from 'react';
import { Cardtag } from './Cardtag';
import { Cardprop } from './Cardprop';
import { AspectRatio } from './AspectRatio';
import { CardContentContainer } from './CardContentContainer';
import { Paragraph } from './Paragraph';
import { HorizontalLayout } from './HorizontalLayout';

export const BaseCard = ({ title, imageSrc, imageAlt, powerStats, cardtagTypes }) => {
  if (!powerStats.length || !cardtagTypes.length) return null;

  return (
    <CardContentContainer>
      <HorizontalLayout justify="end" className="mb-10 pl-6 relative">
        <div className="absolute left-6 top-2 w-1/2 z-10">
          <Paragraph variant="md" lineHeight="leading">
            <b>{title && title}</b>
          </Paragraph>
          <HorizontalLayout align="start" justify="start" className="gap-3">
            {powerStats?.map((data, index) => (
              <Cardprop
                key={index}
                value={data.value}
                label={data.label}
                className="flex-1 mt-2 mb-2 max-w-[50px]"
              />
            ))}
          </HorizontalLayout>
          <HorizontalLayout className="gap-3 text-xs pb-3">
            {cardtagTypes.map((data, index) => (
              <Cardtag key={index} variant={data.variant}>
                {data.label}
              </Cardtag>
            ))}
          </HorizontalLayout>
        </div>
        <div className="red-gradient basis-2/3 pr-4 pl-12 rounded-r-lg">
          <AspectRatio variant="1/1">
            <img src={imageSrc && imageSrc} alt={imageAlt && imageAlt} />
          </AspectRatio>
        </div>
      </HorizontalLayout>
    </CardContentContainer>
  );
};
