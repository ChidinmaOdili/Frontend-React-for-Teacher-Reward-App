import React, {useState} from 'react';
import {
    AppBar,
    IconButton,
    Tab,
    Tabs,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import MobileDrawerComponent from "./MobileDrawerComponent";
import LandingPageButtonComponent from "./LandingPageButtonComponent";
const AppBarComponent = ({ isMediumSize }) => {
    const[menuItems, setMenuItems] = useState(["Home" , "About", "Reward Your Teacher" , "Contact" ]);
    const[value, setValue] = useState();

    const[drawerControl, setDrawerControl] = useState(false);
   // const classes = useStyle();
    const closeDrawer = () => {
      setDrawerControl(false)
    }
    return (
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
                            >
                                RYTPE
                            </Typography>
                            <Tabs textColor="inherit" sx={{ml: 4}} value={value} onChange={(e , value) => setValue(value) } indicatorColor="primary">
                                {
                                    menuItems.map((item , index) => (
                                        <Tab key={index} label={item} />
                                    ))
                                }
                            </Tabs>
                            <LandingPageButtonComponent sx={{mr:2, marginLeft :"auto", background: '#55a630'}} value="Login" />
                            {/*<LandingPageButtonComponent value="Login" />*/}
                        </>
                    )
                }

            </Toolbar>
        </AppBar>
    );
};

export default AppBarComponent;
