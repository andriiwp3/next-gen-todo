import { PropsWithChildren } from 'react';

interface MockComponentProps extends PropsWithChildren {
  [key: string]: unknown;
}

export const mockDiv = ({ children, ...props }: MockComponentProps) => <div {...props}>{children}</div>;

export const mockInput = (props: Omit<MockComponentProps, 'children'>) => <input {...props} />;
