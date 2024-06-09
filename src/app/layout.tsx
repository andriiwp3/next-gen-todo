'use client';

import { Box } from '@chakra-ui/react';
import Cookies from 'js-cookie';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/providers/theme-provider';
import { useAuthStore } from '@/stores/auth-store';

import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, logout: storeLogout } = useAuthStore();

  const logout = () => {
    storeLogout();
    Cookies.remove('token');
  };

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header user={user} logout={logout} />
          <Box as="main" p={4} maxW={975} mx="auto" minH="calc(100vh - 64px - 56px)">
            {children}
          </Box>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
