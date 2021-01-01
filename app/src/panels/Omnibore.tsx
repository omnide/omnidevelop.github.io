import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import bored_svg from './omnibore.svg';
import { infoList } from '../utils/describe';


export default function Omnibore() {
    const renderItem = (key: string, value: any) => (
        <ListItem>
            <ListItemText primary={key} secondary={value} />
        </ListItem>
    );
    const items: JSX.Element[] = [
        (
            <ListItem>
                <img src="omnibore192.png" />
            </ListItem>
        )
    ];
    return (
        <Paper>
            <List>
                {items}
            </List>
        </Paper>
    );
}