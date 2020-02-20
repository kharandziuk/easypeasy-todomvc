import { createMuiTheme } from '@material-ui/core/styles'

import Colors from '../common/colors'
import { Fonts, FontSizes } from '../common/fonts'
import { pxToRem } from '../utils/styles'

function useCustomTheme() {
  const {
    body1,
    body2,
    button,
    caption,
    h1,
    h2,
    h3,
    h4,
    overline,
    subtitle1,
    subtitle2,
  } = FontSizes

  const currentTheme = {
    spacing: 4,
    palette: {
      background: {
        default: Colors.athensGray,
      },
      primary: {
        dark: Colors.parsley,
        light: Colors.panache,
        main: Colors.tundora,
      },
      text: {
        disabled: Colors.nobel,
        primary: Colors.tundora,
        secondary: Colors.black,
      },
      common: {
        black: Colors.black,
      },
      type: 'light',
    },
    typography: {
      fontFamily: Fonts.rubik,
    },
    overrides: {
      MuiTypography: {
        gutterBottom: {
          marginBottom: pxToRem(16),
        },
        h1: {
          color: Colors.black,
          fontSize: pxToRem(h1),
          fontWeight: 300,
          letterSpacing: 0,
          lineHeight: 1.2,
        },
        h2: {
          color: Colors.black,
          fontSize: pxToRem(h2),
          fontWeight: 300,
          letterSpacing: '0.25px',
        },
        h3: {
          fontSize: pxToRem(h3),
          fontWeight: 300,
          letterSpacing: 0,
          lineHeight: 1.17,
        },
        h4: {
          fontSize: pxToRem(h4),
          fontWeight: 300,
          letterSpacing: '0.15px',
          lineHeight: 1.2,
        },
        subtitle1: {
          fontSize: pxToRem(subtitle1),
          fontWeight: 300,
          letterSpacing: '0.15px',
        },
        subtitle2: {
          fontSize: pxToRem(subtitle2),
          fontWeight: 500,
          letterSpacing: '0.1px',
        },
        body1: {
          fontSize: pxToRem(body1),
          fontWeight: 'normal',
          letterSpacing: '0.5px',
          lineHeight: 1.8,
        },
        body2: {
          fontSize: pxToRem(body2),
          fontWeight: 'normal',
          letterSpacing: '0.25px',
        },
        button: {
          boxShadow: 'none',
          fontSize: pxToRem(button),
          fontWeight: 500,
          letterSpacing: '1.25px',
          textDecoration: 'none',
        },
        caption: {
          color: Colors.black,
          fontSize: pxToRem(caption),
          fontWeight: 'normal',
          letterSpacing: '0.4px',
          lineHeight: pxToRem(16),
        },
        overline: {
          fontSize: pxToRem(overline),
          fontWeight: 500,
          letterSpacing: '1.5px',
        },
      },
    },
  }

  const theme = createMuiTheme(currentTheme)

  return {
    theme,
  }
}

export default useCustomTheme
