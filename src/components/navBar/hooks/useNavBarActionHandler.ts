// Libraries
import { useMemo, useCallback, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

// Utils
import { getTabTypeFromPathName } from '../utils';

// Types
import { NavBarState, OnNavBarAction } from '../types';

// Constants
import { NavBarAction } from '../constants/navBarAction';

type Output = [NavBarState, OnNavBarAction];

export const useNavBarActionHandler = (): Output => {
  const [isAddMode, setIsAddMode] = useState<boolean>(false);
  const [isSearchMode, setIsSearchMode] = useState<boolean>(false);

  const router = useRouter();
  const pathName = usePathname();

  const selectedTabType = useMemo(() => getTabTypeFromPathName(pathName), [pathName]);

  const onAction = useCallback(
    (action: NavBarAction): void => {
      switch (action) {
        case NavBarAction.ENTER_ADD_MODE: {
          setIsAddMode(true);
          setIsSearchMode(false);
          break;
        }
        case NavBarAction.ENTER_SEARCH_MODE: {
          setIsSearchMode(true);
          setIsAddMode(false);
          break;
        }
        case NavBarAction.EXIT_ADD_MODE: {
          setIsAddMode(false);
          break;
        }
        case NavBarAction.EXIT_SEARCH_MODE: {
          setIsSearchMode(false);
          break;
        }
        case NavBarAction.TO_INBOX: {
          router.push('/app/inbox');
          break;
        }
        case NavBarAction.TO_TODAY: {
          router.push('/app/today');
          break;
        }
        case NavBarAction.TO_UPCOMING: {
          router.push('/app/upcoming');
          break;
        }
        case NavBarAction.FILTER_AND_LABELS: {
          router.push('/app/filter-labels');
          break;
        }
        default:
          break;
      }
    },
    [router],
  );

  const state = useMemo(
    () => ({
      isAddMode,
      isSearchMode,
      selectedTabType,
    }),
    [isAddMode, isSearchMode, selectedTabType],
  );

  return [state, onAction];
};
