
import './App.css';
import LandingPage from "./pages/indexPage";
import {useMediaQuery, useTheme} from "@mui/material";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import Login from './pages/login/Login';
import Home from './pages/dashBoard/Home';
import RequiredAuth from "./pages/login/RequiredAuth";
import AppBarComponent from "./components/AppBarComponent";
import DashboardAppBar from './components/dashbord_components/DashboardAppBar';


import StudentDashboard from './pages/studentDashboard/StudentDashboard';
import TeacherDashboard from './pages/teacherDashboard copy/TeacherDashboard';

// import BaseRoute from './routes/BaseRoute';



function App() {
    const theme = useTheme();
    const isMediumSize = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className="App">
    
            <Routes>
                <Route exact path="/" element={  <LandingPage isMediumSize={isMediumSize} /> } />
                <Route exact path="/login" element={  <Login /> } />
                <Route exact path="/home" element={<RequiredAuth><Home/></RequiredAuth>}/>
                <Route path="/studentdashboard" element={<StudentDashboard/>}/>
                <Route path="/teacherdashboard" element={<TeacherDashboard/>}/>
  
                

                <Route exact path="/c" element={  <DashboardAppBar /> } />


            </Routes>
  
    </div>
  );
}

export default App;
