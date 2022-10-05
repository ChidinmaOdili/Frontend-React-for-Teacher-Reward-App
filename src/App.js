
import './App.css';
import LandingPage from "./pages/indexPage";
import {useMediaQuery, useTheme} from "@mui/material";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import Login from './pages/login/Login';
import Home from './pages/dashBoard/Home';
import RequiredAuth from "./pages/login/RequiredAuth";
import Body from './pages/allSchools/Body';

function App() {
    const theme = useTheme();
    const isMediumSize = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className="App">
            <Routes>
                <Route exact path="/" element={  <LandingPage isMediumSize={isMediumSize} /> } />
                <Route exact path="/login" element={  <Login /> } />
                <Route exact path="/home" element={<RequiredAuth><Home/></RequiredAuth>}/>
                <Route exact path="school-list" element={<Body />}/>
                

                {/*<Route exact path="/c" element={  <AppBarComponent isMediumSize={isMediumSize} /> } />*/}
            </Routes>
    </div>
  );
}

export default App;
