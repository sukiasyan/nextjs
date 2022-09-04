import { Box } from '@mui/material';
import { DataTypeProvider } from '@devexpress/dx-react-grid';

const logoFormatter = ({ value }) => (
        <Box sx={{maxHeight: 25, maxWidth: 25}}>
            <img src={value} height={25} width={25} alt="logo"/>
        </Box>
)


const LogoProvider = (props) => (
  <DataTypeProvider formatterComponent={logoFormatter} {...props} for={['icon']}/>
);
export default LogoProvider;
