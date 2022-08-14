import Axios from 'axios';
import { useState } from 'react';
import { Stack, Paper } from '@mui/material';
import styles from '../../styles/Coins.module.css';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { DataTypeProvider, EditingState } from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  VirtualTable,
} from '@devexpress/dx-react-grid-material-ui';
import { ClassNames } from '@emotion/react';

const columns = [
  { name: 'icon', title: 'Logo' },
  { name: 'name', title: 'Coin Name' },
  { name: 'price', title: 'Price' },
];

const BooleanFormatter = ({ value }) => (
  <Box sx={{ maxHeight: 25, maxWidth: 25 }}>
    <img src={value} height='25' width='25' />
  </Box>
);

export const LogoTypeProvider = (props) => (
  <DataTypeProvider formatterComponent={BooleanFormatter} {...props} />
);

const CoinList = ({ coinData }) => {
  console.log(coinData);
  const [imageColumns] = useState(['icon']);

  const [rows] = useState(
    coinData.coins.map((coin) => {
      return {
        name: coin.name,
        icon: coin.icon,
        price: coin.price,
      };
    })
  );

  return (
    <Paper sx={{ pt: 8 }}>
      <Grid rows={rows} columns={columns}>
        <LogoTypeProvider for={imageColumns} />
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
