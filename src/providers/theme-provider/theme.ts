import { extendTheme, type Theme } from '@chakra-ui/react';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

const config: Theme['config'] = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const styles: Theme['styles'] = {
  global: {
    body: {
      bg: 'gray.900',
      color: 'gray.200',
    },
  },
};

const fonts: Theme['fonts'] = {
  heading: GeistSans.style.fontFamily,
  body: GeistSans.style.fontFamily,
  mono: GeistMono.style.fontFamily,
};

const components: Partial<Theme['components']> = {
  Button: {
    defaultProps: {
      size: 'sm',
    },
  },
  Link: {
    variants: {
      'ghost-button': {
        color: 'whiteAlpha.900',
        appearance: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        userSelect: 'none',
        padding: '0 20px',
        borderRadius: 'md',

        '&:hover': {
          bg: 'whiteAlpha.200',
          textDecoration: 'none',
        },
      },
    },
  },
};

const theme = extendTheme({
  config,
  styles,
  fonts,
  components,
});

export default theme;
