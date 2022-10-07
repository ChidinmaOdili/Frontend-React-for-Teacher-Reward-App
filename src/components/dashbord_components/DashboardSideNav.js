import React , { useState }from 'react'
import {Drawer, Typography} from "@mui/material";
import List from '@mui/material/List';
import Icon from '@mui/material/Icon';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Link } from 'react-router-dom';
const DashboardSideNav =({ navlink }) => {
  
    const [open, setOpen] = useState(false);
    const[InboxIcon , setDrawerControl] = useState("");
    return (
    <Drawer
        open={true}
        PaperProps={
            {
                elevation : 6,
                sx : {
                    marginTop : 8.09
                }
            }
        }
        className="dashboardDrawer"
        elevation={10}
        sx={{
            width: '400px',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: '300px',
                boxSizing: 'border-box',
            },
        }}
        variant="permanent"
        anchor="left"
        >

        <List sx={{ mt : 6 , ml : 3 }}>
            {
                navlink.map((item) => (
                    <ListItem disablePadding key={item.name}>
                    <ListItemButton>
                
                        <item.icon sx={{ mr : 2 , color : '#03435f', fontSize : '20px' }}/>
                      <Link to="/schools" style={{ textDecoration : 'none' }}>
                        <ListItemText primary={item.name}  sx={{ color : '#03435f', fontSize : '20px' }}/>
                      </Link>
                    </ListItemButton>
                  </ListItem> 
                ))
            }
        </List>




        <List sx={{ marginTop : 45 , background : '#f2f8e8'}}>
                    <ListItem disablePadding >
                    <ListItemButton>
                        <LogoutIcon sx={{ mr : 2 }}/>
                      <ListItemText primary="Logout" />
                    </ListItemButton>
                  </ListItem> 
        </List>
    </Drawer>
  )
}

export default DashboardSideNav