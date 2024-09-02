// Components
import { ViewMenuItemContainer } from '../components/ViewMenuItemContainer';

// Icons
import { IconSearch } from '@tabler/icons-react';

// Types
import type { NavBarState, OnNavBarAction } from 'components/navBar/types';

// Constants
import { NavBarAction } from 'components/navBar/constants/navBarAction';

// Constants

interface SearchItemProps {
  state: NavBarState;
  onAction: OnNavBarAction;
}

export const SearchItem = ({ state, onAction }: SearchItemProps): JSX.Element => (
  <ViewMenuItemContainer
    label="Search"
    action={NavBarAction.ENTER_SEARCH_MODE}
    onAction={onAction}
    state={state}
    tabType={undefined}
  >
    <IconSearch size={18} stroke={1} />
  </ViewMenuItemContainer>
);
