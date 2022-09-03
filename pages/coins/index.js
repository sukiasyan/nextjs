import Axios from 'axios';
import { useState } from 'react';
import {  Paper } from '@mui/material';
import {
  Grid,
  TableHeaderRow,
  VirtualTable,
} from '@devexpress/dx-react-grid-material-ui';
import PriceWeekProvider from "./dataFormatters/priceWeekFormatter";
import PriceHourProvider from "./dataFormatters/priceHourFormatter";
import PriceDayProvider from "./dataFormatters/priceDayFormatter";
import LogoProvider from "./dataFormatters/logoFormatter";

const columns = [
  { name: 'icon', title: 'Logo' },
  { name: 'name', title: 'Coin Name' },
  { name: 'price', title: 'Price' },
  { name: 'priceChange1d', title: 'Price' },
  { name: 'priceChange1h', title: 'Price' },
  { name: 'priceChange1w', title: 'Price' },
];

const CoinList = ({ coinData }) => {
  console.log(coinData);

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
          <LogoProvider  />
          <PriceWeekProvider />
          <PriceHourProvider />
          <PriceDayProvider />
          <VirtualTable height="90vh" />
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
