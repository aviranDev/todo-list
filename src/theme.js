import { createTheme } from '@material-ui/core'
import { deepPurple, amber } from '@material-ui/core/colors'


const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500]
    },
    secondary: {
      main: amber[500],
      contrastText: deepPurple[500]
    },
  }
})

export default theme;