// Components
import { Box } from '@mantine/core';
import { ViewMenu } from './components/viewMenu';
import { PlaceHolder } from './components/PlaceHolder';

export const NavBar = (): JSX.Element => (
  <Box className="w-96 h-full flex-column bg-blue-100 p-2">
    <PlaceHolder />
    <ViewMenu />
  </Box>
);
