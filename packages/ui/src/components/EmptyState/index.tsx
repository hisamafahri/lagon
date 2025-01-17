import { ReactElement } from 'react';
import { Text } from '../';

type EmptyStateProps = {
  title: string;
  description: string;
  action?: ReactElement;
};

export const EmptyState = ({ title, description, action }: EmptyStateProps) => {
  return (
    <div className="flex flex-col gap-8 text-center p-8 items-center">
      <div className="flex flex-col gap-2 max-w-[300px]">
        <Text size="xl">{title}</Text>
        <Text>{description}</Text>
      </div>
      {action}
    </div>
  );
};
