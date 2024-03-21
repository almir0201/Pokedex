import { cn } from '../../../lib/utils';

export const Footer = ({ children, className }) => {
  return <div className={cn(className)}>{children}</div>;
};
