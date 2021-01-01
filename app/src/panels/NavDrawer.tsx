import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CakeIcon from '@material-ui/icons/Cake';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import AssignmentIcon from '@material-ui/icons/Assignment';
import OmniboreIcon from '../Omnibore'

export function staticItems(setPanelName: React.Dispatch<React.SetStateAction<string>>) {
  const item = (name: string, label: string, icon: JSX.Element): JSX.Element => {
    return (
      <ListItem button onClick={() => setPanelName(name)}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItem>
    )
  }
  const items = [
    item('omnibore', 'Omnibore', (<OmniboreIcon />)),
    item('reveal', 'Reveal', (<VisibilityIcon />)),
    item('cake', 'Cake', (<CakeIcon />)),
    item('stonks', 'Stonks', (<TrendingUpIcon />)),
    item('bubbles', 'Bubbles', (<BubbleChartIcon />)),
    item('where', 'Where', (<GpsFixedIcon />)),
  ]
  return (
    <div>
      {items}
    </div>
  );
}

export const contextItems = (
  <div>
    <ListSubheader inset>These don't do anything</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Official Report' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Unofficial Report' />
    </ListItem>
  </div>
);
