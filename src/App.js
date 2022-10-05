
import './App.css';
// import './Wallet.css';
import LandingPage from "./pages/indexPage";
import {useMediaQuery, useTheme} from "@mui/material";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import StudentDashboard from './components/AddMoney/StudentDashboard';
import TeacherDashboard from './components/AddMoney/TeacherDashboard';
import FundWallet from './components/AddMoney/FundWallet';
function App() {
    const theme = useTheme();
    const isMediumSize = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className="App">
            <Routes>
              <Route exact path="/" element={<LandingPage isMediumSize={isMediumSize} />} />
              <Route exact path="/student-dashboard" element={<StudentDashboard />} />
              <Route exact path="/teacher-dashboard" element={<TeacherDashboard />} />
              <Route exact path="/fund-wallet" element={  <FundWallet/> } />
                {/*<Route exact path="/c" element={  <AppBarComponent isMediumSize={isMediumSize} /> } />*/}
            </Routes>
    </div>
  );
}

export default App;
