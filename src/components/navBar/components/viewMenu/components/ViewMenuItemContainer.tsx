// Libraries
import { useCallback, ReactNode } from 'react';

// Components
import { ViewMenuItem } from './ViewMenuItem';

// Types
import type { NavBarAction } from 'components/navBar/constants/navBarAction';
import type { TabType } from 'components/navBar/constants/tabs';
import type { NavBarState, OnNavBarAction } from 'components/navBar/types';

interface ViewMenuItemContainerProps {
  label: string;
  action: NavBarAction;
  onAction: OnNavBarAction;
  state: NavBarState;
  tabType: Whiz.Undefined<TabType>;
  labelClassName?: string;
  children: ReactNode;
}

export const ViewMenuItemContainer = ({
  label,
  action,
  onAction,
  state,
  tabType,
  labelClassName,
  children,
}: ViewMenuItemContainerProps): JSX.Element => {
  const isSelected = state.selectedTabType === tabType;

  const onClick = useCallback(() => {
    onAction(action);
  }, [onAction, action]);

  return (
    <ViewMenuItem label={label} onClick={onClick} isSelected={isSelected} labelClassName={labelClassName}>
      {children}
    </ViewMenuItem>
  );
};
