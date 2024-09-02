// Types
import type { NavBarAction } from './constants/navBarAction';
import type { TabType } from './constants/tabs';

export type OnNavBarAction = (action: NavBarAction) => void;

export type NavBarState = {
  isAddMode: boolean;
  isSearchMode: boolean;
  selectedTabType: Whiz.Undefined<TabType>;
  /* search and filter items to be added later  */
};
