// theme.ts
import { createTheme, DEFAULT_THEME, mergeMantineTheme } from '@mantine/core';

const themeOverride = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  headings: {
    fontFamily: 'Open Sans, sans-serif',
  },
});

export const TODIFY_THEME = mergeMantineTheme(DEFAULT_THEME, themeOverride);
