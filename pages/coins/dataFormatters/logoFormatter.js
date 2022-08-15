import { Box } from '@mui/material';
import { DataTypeProvider } from '@devexpress/dx-react-grid';

const logoFormatter = ({ value }) => (
  <Box sx={{ maxHeight: 25, maxWidth: 25 }}>
    <img src={value} height='25' width='25' />
  </Box>
);

const LogoProvider = (props) => (
  <DataTypeProvider formatterComponent={logoFormatter} {...props} />
);
export default LogoProvider;
