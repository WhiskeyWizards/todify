'use client';
// Components
import { Box } from '@mantine/core';
import { NavBar } from 'components/navBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box className="w-full h-screen flex">
      <NavBar />
      <Box className="w-full h-full bg-blue-50" component="main">
        {children}
      </Box>
    </Box>
  );
}
