import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
});

const theme = extendTheme({
  breakpoints,

  fonts: {
    body: 'karla',
  },

  colors: {
    primary: '#2B4162',
    primaryDarker: '#22344E',
    secondary: '#44669A',
    danger: '#E75A7C',
    dangerDarker: '#E2325B',
  },

  components: {
    List: {
      baseStyle: {
        container: {
          display: 'flex',
          flexDirection: 'column',
          gap: '2em',
          width: '100%',
          defaultProps: {
            variant: '',
          },
        },
        item: {
          paddingBlock: 4,
          paddingInline: 5,
          borderRadius: '1em',
          width: '100%',
          background: 'secondary',
          textAlign: 'left',
          transition: 'all 100ms ease-in-out',
        },
        defaultProps: {
          variant: '',
        },
      },
    },
  },

  styles: {
    global: {
      '*, *::before, *::after': {
        boxSizing: 'border-box',
      },

      '*': {
        margin: '0',
        color: 'white',
      },

      '#root,html, body': {
        height: '100%',
      },

      html: {
        fontSize: '1.2em',
      },

      body: {
        lineHeight: 1.5,
        webkitFontSmoothing: 'antialiased',
        background: 'primary',
      },

      main: {
        position: 'relative',
      },

      'img, picture, video, canvas, svg': {
        display: 'block',
        maxInlineSize: '100%',
      },

      'input, button, textarea, select ': {
        font: 'inherit',
      },

      'p, h1, h2, h3, h4, h5, h6': {
        overflowWrap: 'break-word',
      },

      '#root, #__next': {
        isolation: 'isolate',
      },
    },
  },
});

export default theme;
