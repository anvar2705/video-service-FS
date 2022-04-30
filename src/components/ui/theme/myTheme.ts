import { DefaultTheme } from 'styled-components'
import scss from 'assets/scss/variables.module.scss'

const myTheme: DefaultTheme = {
  colors: {
    primary: {
      main: scss.colorMain,
      dark: scss.colorMainDark,
    },
    secondary: {
      main: scss.colorSecondary,
      dark: scss.colorSecondaryDark,
    },
  },
}

export { myTheme }
