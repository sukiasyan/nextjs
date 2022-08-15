import Axios from 'axios';
import { useState } from 'react';
import { Paper, Box } from '@mui/material';
import LogoProvider from './dataFormatters/logoFormatter';
import PriceDayProvider from './dataFormatters/priceDayFormatter';
import PriceHourProvider from './dataFormatters/priceHourFormatter';
import PriceWeekProvider from './dataFormatters/priceWeekFormatter';
import { DataTypeProvider, EditingState } from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  VirtualTable,
} from '@devexpress/dx-react-grid-material-ui';

const columns = [
  { name: 'icon', title: 'Logo' },
  { name: 'name', title: 'Coin Name' },
  { name: 'price', title: 'Price' },
  { name: 'priceChange1d', title: 'Price Change (day)' },
  { name: 'priceChange1h', title: 'Price Change (hour)' },
  { name: 'priceChange1w', title: 'Price Change (week)' },
];

const CoinList = ({ coinData }) => {
  console.log(coinData);
  const [imageColumns] = useState(['icon']);
  const [priceDayColumns] = useState(['priceChange1d']);
  const [priceHourColumns] = useState(['priceChange1h']);
  const [priceWeekColumns] = useState(['priceChange1w']);

  const [rows] = useState(
    coinData.coins.map((coin) => {
      return {
        name: coin.name,
        icon: coin.icon,
        price: coin.price,
        priceChange1d: coin.priceChange1d,
        priceChange1h: coin.priceChange1h,
        priceChange1w: coin.priceChange1w,
      };
    })
  );

  return (
    <Paper sx={{ pt: 8 }}>
      <Grid rows={rows} columns={columns}>
        <LogoProvider for={imageColumns} />
        <PriceDayProvider for={priceDayColumns} />
        <PriceHourProvider for={priceHourColumns} />
        <PriceWeekProvider for={priceWeekColumns} />

        <VirtualTable />
        <TableHeaderRow />
      </Grid>
    </Paper>
  );
};

export const getStaticProps = async () => {
  const data = await Axios.get(
    'https://api.coinstats.app/public/v1/coins?skip=0'
  );

  return {
    props: {
      coinData: data.data,
    },
  };
};

export default CoinList;
