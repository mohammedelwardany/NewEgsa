import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import VerticalToggleButtons from './button';
import { useDispatch, useSelector } from 'react-redux';
import { TakeSubsystemItem } from '../../../../Redux/PlanSlice';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function CommendPannel() {
  const [value, setValue] = React.useState(0);
  const {subsystemCommendsdata} = useSelector(state => state.plan)
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    const subSystemName = subsystemCommendsdata[newValue].subSystemName
    console.log(newValue)
    const subSystemId = newValue;

    dispatch(TakeSubsystemItem({subSystemId:subSystemId,subSystemName:subSystemName}))
  };

  return (
    <Box
   

      sx={{ flexGrow: 1, display: 'flex',overflowX:"scroll"}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
{


subsystemCommendsdata.map(((subsystemCommendsdata,i)=>{
  // const handleButtonClick = event  => {
  //   setActiveButtonId(Number(event.target.value));
  //   console.log(i)

  // }
  return(
   
<Tab key={subsystemCommendsdata.id} label={subsystemCommendsdata.subSystemName} {...a11yProps(subsystemCommendsdata.id)} />
  
  
  
  )

})

)
}
        {/* <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>

      <TabPanel value={value} index={value} >
        <VerticalToggleButtons index={value}
        datas={subsystemCommendsdata[value].commands}
        // datas={[]]}

        
        />
        
      </TabPanel>
      
    </Box>
  );
}