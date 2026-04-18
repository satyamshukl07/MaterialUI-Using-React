// import { useState } from 'react'
// import './App.css'
// import SearchBox from "./SearchBox";
// import InfoBox from "./InfoBox";
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
import WeatherApp  from"./WeatherApp";

// const theme = createTheme({
//   palette: {
//     mode: 'light',
//   },
// });

function App() {
  return (
    <>
    {/* <ThemeProvider theme={theme}> */}
      {/* <CssBaseline /> */}
      <WeatherApp/>
      {/* <InfoBox/> */}
    {/* </ThemeProvider> */}
    </>
  );
}

export default App