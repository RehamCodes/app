import { AccountBoxOutlined, AccountCircleOutlined, Article, Groups, Home, ModeNight, Pages, PeopleAlt, Settings, Store, Storefront, StorefrontOutlined } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = ({mode,setMode}) => {
  return (
    <Box flex={1}p={2} sx={{display:{xs:"none", sm:"block"}}}
    >
    <Box position="fixrd">
<List>
      <ListItem disablePadding>
            <ListItemButton component="a"href='#Home'>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a"href='#Pages'>
              <ListItemIcon>
                <Article/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a"href='#Groups'>
              <ListItemIcon>
                <Groups/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a"href='#Groups'>
              <ListItemIcon>
                <StorefrontOutlined/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton component="a"href='#Friend'>
              <ListItemIcon>
                <PeopleAlt/>
              </ListItemIcon>
              <ListItemText primary="Friend"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a"href='#Settings'>
              <ListItemIcon>
                <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a"href='#Profile'>
              <ListItemIcon>
                <AccountCircleOutlined/>
              </ListItemIcon>
              <ListItemText primary="Profile"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a"href='#Profile'>
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
              <Switch onClick={e=>setMode(mode==="light" ?"dark" :"light")}/>
            </ListItemButton>
          </ListItem>


          

          
    </List>
    </Box>
    </Box>
  )
}

export default Sidebar