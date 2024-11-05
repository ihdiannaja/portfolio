import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import '@fontsource/raleway/300.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/700.css';

const theme = createTheme({
  typography: {
    fontFamily: "Raleway, Roboto, Arial, sans-serif"
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none"
        }
      }
    },
  }
})

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100vh", p: { xs: "0px 100px", md: "100px 200px" } }}>
        <App />
      </Box>
    </CssBaseline>
  </ThemeProvider>
)
