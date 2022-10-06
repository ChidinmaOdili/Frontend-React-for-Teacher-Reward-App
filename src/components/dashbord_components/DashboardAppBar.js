import React, {useState} from 'react';
import {
    AppBar,
    IconButton,
    Tab,

    Drawer,
    Avatar,
    Stack,
    Tabs,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import DashboardSideNav from "./DashboardSideNav";
import MobileDrawerComponent from "../MobileDrawerComponent"
import LandingPageButtonComponent from "../LandingPageButtonComponent";
import { studentDashBoard , teacherDashBoard } from '../../Utility/DashboardUtilities';

const DashboardAppBar = ({ isMediumSize }) => {
    const[menuItems, setMenuItems] = useState(["Home" , "About", "Reward Your Teacher" , "Contact" ]);
    const[value, setValue] = useState();
    const[navlist , setNavList] = useState(teacherDashBoard);
    const[drawerControl, setDrawerControl] = useState(false);
   // const classes = useStyle();
    const closeDrawer = () => {
      setDrawerControl(false)
    }
    return (
       
        <>
         <AppBar  position="sticky" elevation={6} sx={{background: '#FFFFFF', color: '#55a630',   paddingX : isMediumSize ? 1 : 10}}>
            <Toolbar>
                {
                    isMediumSize ? (
                        <>
                            <MobileDrawerComponent action={closeDrawer} isOpen={drawerControl} menuItem={menuItems} />
                            <IconButton
                                onClick={() => setDrawerControl(true)}
                                sx={{mr:2, marginLeft :"auto"}}
                            >
                                <MenuIcon />
                            </IconButton></>
                    ) : (
                        <>
                            <CurrencyExchangeIcon
                                sx={{
                                    mr : 3,
                                }}
                                color="inherit"
                            />
                            <Typography
                                variant='h6'
                                color="inherit"
                                href="/"
                            >
                                Reward Your Teacher
                            </Typography>
                           
                           <Stack alignItems="center" sx={{mr:2, marginLeft :"auto"}} direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <Typography sx={{ fontSize : '12px' }} variant="h6">Remy </Typography>
                           </Stack>
                            {/* <LandingPageButtonComponent  value="Login" /> */}
                            {/*<LandingPageButtonComponent value="Login" />*/}
                        </>
                    )
                }

            </Toolbar>
        </AppBar>
        <DashboardSideNav  navlink={navlist} />
        </>
    );
};

export default DashboardAppBar;
