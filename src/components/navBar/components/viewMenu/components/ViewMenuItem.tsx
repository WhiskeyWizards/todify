// Libraries
import { clsx } from 'clsx';

// Components
import { Box, UnstyledButton as BaseButton } from '@mantine/core';

// Types
import { ReactNode } from 'react';

interface ViewMenuItemProps {
  label: string;
  onClick: () => void;
  children: ReactNode;
  labelClassName?: string;
  isSelected?: boolean;
}

export const ViewMenuItem = ({ label, onClick, children, labelClassName }: ViewMenuItemProps): JSX.Element => (
  <BaseButton onClick={onClick} className="flex gap-2 items-center w-full h-14 hover:bg-blue-200 rounded-md">
    {children}
    <Box component="span" className={clsx('text-lg', labelClassName, {})}>
      {label}
    </Box>
  </BaseButton>
);
