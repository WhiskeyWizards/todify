// Components
import { Box, Image, UnstyledButton as BaseButton } from '@mantine/core';

// Icons
import { IconBell, IconLayoutSidebarLeftCollapse } from '@tabler/icons-react';

export const PlaceHolder = (): JSX.Element => (
  <Box className="h-14 my-3">
    <Box className="flex items-center justify-between border-b border-black pb-2">
      <BaseButton className="flex gap-2 items-center">
        <Image
          src="https://dcff1xvirvpfp.cloudfront.net/4c95d3d4e507474a9bfbf44669d65a51_big.jpg"
          className="rounded-full w-8 h-8"
          alt="User Avatar"
        />
        <Box className="font-bold text-lg">UserName</Box>
      </BaseButton>
      <Box className="flex items-center gap-2">
        <BaseButton>
          <IconBell />
        </BaseButton>
        <BaseButton>
          <IconLayoutSidebarLeftCollapse />
        </BaseButton>
      </Box>
    </Box>
  </Box>
);
