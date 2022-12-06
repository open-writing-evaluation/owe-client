import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

type NavBarProps = {
    toggleDrawer: () => void,
    language: string,
};

export default function NavBar(props: NavBarProps) {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1 }}
                    onClick={props.toggleDrawer}
                >
                    <MenuIcon />
                </IconButton>
                <Typography 
                    variant="h6" 
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    Open Writing Evaluation
                </Typography>
                <Typography
                    variant="overline"
                >
                    {props.language}
                </Typography>
            </Toolbar>
      </AppBar>
    );
}