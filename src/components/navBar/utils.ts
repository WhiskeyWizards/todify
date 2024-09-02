// Constants
import { TabType } from './constants/tabs';

export const getTabTypeFromPathName = (pathName: string): Whiz.Undefined<TabType> => {
  const tabName = pathName.split('/')[2];
  switch (tabName) {
    case 'inbox':
      return TabType.INBOX;
    case 'today':
      return TabType.TODAY;
    case 'upcoming':
      return TabType.UPCOMING;
    case 'filter-labels':
      return TabType.FILTER_AND_LABELS;
    default:
      return undefined;
  }
};
