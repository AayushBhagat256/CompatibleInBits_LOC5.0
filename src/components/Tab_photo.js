import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Domain_indi from './Domain_indi';
import Work_indi from './Work_indi';
import Market_indi from './Market_indi';
import Review from './Review';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }
    
    TabPanel.propTypes = {
      children: PropTypes.node,
      index: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    };
    
    function a11yProps(index) {
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    }
    
    export default function Tab_photo() {
      const [value, setValue] = React.useState(0);
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
      };
    
      return (
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Domain" {...a11yProps(0)} />
              <Tab label="Works" {...a11yProps(1)} />
              <Tab label="Marketplace" {...a11yProps(2)} />
              <Tab label="Review" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Domain_indi/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Work_indi/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Market_indi/>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Review/>
          </TabPanel>
        </Box>
      );
    }
