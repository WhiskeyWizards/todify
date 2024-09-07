//  Hooks
import { useNavBarActionHandler } from '../../hooks/useNavBarActionHandler';

// Components
import { Stack } from '@mantine/core';
import { AddTaskItem } from './menuItems/AddTaskItem';
import { SearchItem } from './menuItems/SearchItem';

export const ViewMenu = (): JSX.Element => {
  const [state, onAction] = useNavBarActionHandler();

  return (
    <Stack gap="md">
      <AddTaskItem state={state} onAction={onAction} />
      <SearchItem state={state} onAction={onAction} />
    </Stack>
  );
};
