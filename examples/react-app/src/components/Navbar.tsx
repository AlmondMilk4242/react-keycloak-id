import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Link } from 'react-router-dom'
//ICONS
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import HomeIcon from '@mui/icons-material/Home'
import InsightsIcon from '@mui/icons-material/Insights'
import PreviewIcon from '@mui/icons-material/Preview'
import SummarizeIcon from '@mui/icons-material/Summarize'
import AnnouncementIcon from '@mui/icons-material/Announcement'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'
import HelpIcon from '@mui/icons-material/Help'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const drawerWidth = 240

export default function Navbar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Pydantic
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {[
            'Home',
            'Dashboard',
            'Preview',
            'Reports',
            'Insights',
            'Progress',
            'Settings',
            'Help',
          ].map((text) => (
            <ListItem key={text} disablePadding>
              <Link
                to={
                  text === 'Home'
                    ? '/'
                    : text === 'Dashboard'
                    ? '/dashboard'
                    : text === 'Preview'
                    ? '/preview'
                    : text === 'Reports'
                    ? '/reports'
                    : text === 'Insights'
                    ? '/insights'
                    : text === 'Progress'
                    ? '/progress'
                    : text === 'Settings'
                    ? '/settings'
                    : text === 'Help'
                    ? '/help'
                    : '#'
                }
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    {text === 'Home' ? (
                      <HomeIcon />
                    ) : text === 'Dashboard' ? (
                      <InsightsIcon />
                    ) : text === 'Preview' ? (
                      <PreviewIcon />
                    ) : text === 'Reports' ? (
                      <SummarizeIcon />
                    ) : text === 'Insights' ? (
                      <AnnouncementIcon />
                      ) : text === 'Progress' ? (
                        <AccessTimeIcon />
                    ) : text === 'Settings' ? (
                      <SettingsApplicationsIcon />
                    ) : text === 'Help' ? (
                      <HelpIcon />
                    ) : (
                      '#'
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  )
}
