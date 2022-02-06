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
    primaryDarkerHover: '#1D2D43',
    primaryDarkerActive: '#182538',
    secondary: '#44669A',
    danger: '#E75A7C',
    dangerDarker: '#E2325B',
  },

  components: {
    Box: {
      variants: {
        user: {
          bg: 'primaryDarker',
          border: 'none',
          display: 'flex',
          borderRadius: '15px;',
          paddingBlock: 4,
          paddingInline: 4,
        },
      },
    },
    Text: {
      variants: {
        title: {
          bg: 'transparent',
          border: 'none',
          fontSize: '1.2em',
          padding: '0',
          textAlign: 'center',
          transition: 'all 400ms ease-in-out',
          width: 'full',
        },
        user: {
          bg: 'primaryDarker',
          border: 'none',
          borderRadius: '15px;',
          paddingBlock: 4,
          paddingInline: 4,
        },
        password: {
          bg: 'primaryDarker',
          border: 'none',
          borderRadius: '15px;',
          paddingBlockEnd: 3,
          paddingBlockStart: 5,
          paddingInline: 4,
        },
      },
    },
    Button: {
      baseStyle: {
        _focus: {},
        _hover: {},
        _active: {},
        _disabled: {},
      },

      variants: {
        primaryAction: {
          bg: 'white',
          color: 'black',
          transition: 'all 200ms ease-in-out',
        },
        secondaryAction: {
          border: '1px solid white',
          bg: 'transparent',
          transition: 'all 200ms ease-in-out',
          _hover: {
            bg: 'white',
            color: 'black',
          },
        },
        dangerAction: {
          border: '1px solid white',
          bg: 'transparent',
          transition: 'all 200ms ease-in-out',
          _hover: {
            color: 'black',
            bg: 'danger',
            border: '1px solid',
            borderColor: 'danger',
          },
        },
        iconButton: {
          borderRadius: '50%',
          padding: 0,
          bg: 'primaryDarker',
          _hover: {
            bg: 'primaryDarkerHover',
          },
          _active: {
            bg: 'primaryDarkerActive',
          },
        },
      },

      defaultProps: {
        variant: '',
      },
    },
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
