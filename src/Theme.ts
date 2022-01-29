import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'karla',
  },

  styles: {
    global: {
      '*, *::before, *::after': {
        boxSizing: 'border-box',
      },

      '*': {
        margin: '0',
      },

      'html, body': {
        height: '100%',
      },

      body: {
        lineHeight: 1.5,
        '-webkit-font-smoothing': 'antialiased',
      },

      'img, picture, video, canvas, svg': {
        display: 'block',
        'max-inline-size': '100%',
      },

      'input, button, textarea, select ': {
        font: 'inherit',
      },

      'p, h1, h2, h3, h4, h5, h6': {
        'overflow-wrap': 'break-word',
      },

      '#root, #__next': {
        isolation: 'isolate',
      },
    },
  },
});

export default theme;
