import { HorizontalLayout } from '../HorizontalLayout/HorizontalLayout';
import { cn } from '../../../lib/utils';

export const Footer = ({ children, className }) => {
  return <HorizontalLayout className={cn(className)}>{children}</HorizontalLayout>;
};
