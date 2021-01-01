import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { infoList } from '../utils/describe';


export default function Reveal() {
  const renderItem = (key: string, value: any) => (
    <ListItem>
      <ListItemText primary={key} secondary={value} />
    </ListItem>
  );
  const items = [];
  for (const [key, value] of infoList(window.navigator)) {
    items.push(renderItem(key, value));
  }
  return (
    <Paper>
      <List>
        {items}
      </List>
    </Paper>
  );
}

