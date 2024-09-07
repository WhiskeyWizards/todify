import '../styles/globals.css';

// Providers
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

// Types
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

// Theme
import { TODIFY_THEME } from '../theme/mantineTheme';

export const metadata: Metadata = {
  title: {
    template: '%s | todify',
    default: 'todify',
  },
  description: 'Full-stack project',
};

const RootLayout = ({ children }: { children: ReactNode }): JSX.Element => (
  <html lang="en">
    <head>
      <ColorSchemeScript />
    </head>
    <body>
      <MantineProvider theme={TODIFY_THEME}>{children}</MantineProvider>
    </body>
  </html>
);

export default RootLayout;
