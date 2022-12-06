import React from 'react';
import { Drawer, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, List, ListItem, Typography, ClickAwayListener } from '@mui/material'

type SidebarProps = {
    open: boolean,
    onClick: () => void,
    setLanguage: (event: React.ChangeEvent<HTMLInputElement>) => void,
    defaultValue: string,
};

export default function Sidebar(props: SidebarProps) {
    return (
        <Drawer
            open={props.open}
        >
            <ClickAwayListener onClickAway={props.onClick}>
                <List>
                    <ListItem>
                        <Typography
                            variant='h6'
                        >
                            Settings
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <FormControl>
                            <FormLabel id="owe-language-select">Language</FormLabel>
                            <RadioGroup
                                defaultValue={props.defaultValue}
                                name="language-select"
                                onChange={props.setLanguage}
                            >
                                <FormControlLabel value="English" control={<Radio />} label="English"/>
                                <FormControlLabel value="Korean" control={<Radio />} label="Korean"/>
                                <FormControlLabel value="Chinese" control={<Radio />} label="Chinese"/>
                            </RadioGroup>
                        </FormControl>
                    </ListItem>
                </List>
            </ClickAwayListener>
        </Drawer>
    );
}