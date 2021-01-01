import React from 'react';
import { MuiThemeProvider, ThemeOptions, createMuiTheme } from "@material-ui/core/styles";
import Dashboard from './Dashboard'
import './App.css';

function App() {
  const [theme, setTheme] = React.useState<ThemeOptions>({
    palette: {
      type: "dark",
    }
  });
  const muiTheme = createMuiTheme(theme);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <div className="App">
        <Dashboard />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
