import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { infoList } from '../utils/describe';

export default function Where() {
  let [location, setLocation] = React.useState<GeolocationPosition | undefined>(undefined);
  const queryLocation = () => {
    window.navigator.geolocation.getCurrentPosition(setLocation);
  }
  React.useEffect(queryLocation, []);
  
  const renderItem = (key: string, value: any) => (
    <ListItem>
      <ListItemText primary={key} secondary={value} />
    </ListItem>
  );
  const items = [];
  if (location === undefined) {
    items.push(renderItem('location', 'undefined'));
  } else {
    for (const [key, value] of infoList(location)) {
      items.push(renderItem(key, value));
    }
  }
  return (
    <Paper>
      <List>
        {items}
      </List>
    </Paper>
  );
}
