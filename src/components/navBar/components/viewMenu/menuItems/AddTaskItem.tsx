// Components
import { ViewMenuItemContainer } from '../components/ViewMenuItemContainer';

// Icons
import { IconCirclePlus } from '@tabler/icons-react';

// Types
import type { NavBarState, OnNavBarAction } from 'components/navBar/types';

// Constants
import { NavBarAction } from 'components/navBar/constants/navBarAction';

// Constants

interface AddTaskItemProps {
  state: NavBarState;
  onAction: OnNavBarAction;
}

export const AddTaskItem = ({ state, onAction }: AddTaskItemProps): JSX.Element => (
  <ViewMenuItemContainer
    label="Add Task"
    action={NavBarAction.ENTER_ADD_MODE}
    onAction={onAction}
    state={state}
    tabType={undefined}
  >
    <IconCirclePlus size={18} />
  </ViewMenuItemContainer>
);
