
import './App.css';
import LandingPage from "./pages/indexPage";
import {useMediaQuery, useTheme} from "@mui/material";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
function App() {
    const theme = useTheme();
    const isMediumSize = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className="App">
            <Routes>
                <Route exact path="/" element={  <LandingPage isMediumSize={isMediumSize} /> } />
                {/*<Route exact path="/c" element={  <AppBarComponent isMediumSize={isMediumSize} /> } />*/}
            </Routes>
    </div>
  );
}

export default App;
