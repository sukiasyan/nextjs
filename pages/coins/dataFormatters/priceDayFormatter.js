import { DataTypeProvider } from '@devexpress/dx-react-grid';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const priceDayFormatter = ({ value }) => {
  if (value <= 0) {
    return (
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: 'red' }}>
            <ArrowDownwardIcon />
          </ListItemIcon>
          <ListItemText primary={value} />
        </ListItemButton>
      </ListItem>
    );
  } else {
    return (
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: 'green' }}>
            <ArrowUpwardIcon />
          </ListItemIcon>
          <ListItemText primary={value} />
        </ListItemButton>
      </ListItem>
    );
  }
};

const PriceDayProvider = (props) => (
  <DataTypeProvider formatterComponent={priceDayFormatter} {...props} for={['priceChange1d']} />
);

export default PriceDayProvider;
