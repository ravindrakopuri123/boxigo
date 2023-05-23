import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FireTruckIcon from '@mui/icons-material/FireTruck';
import PersonIcon from '@mui/icons-material/Person';
import PanoramaVerticalSelectIcon from '@mui/icons-material/PanoramaVerticalSelect';
import LogoutIcon from '@mui/icons-material/Logout';
import Moves from "./moves";


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
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

export default function Movies() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <img src="data:image/png;base64,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" width="200px" style={{margin:"20px"}}/>
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 360,
        paddingTop:"70px"
      }}
    >
      <Tabs
      style={{width:"230px"}}
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 0, borderColor: "divider"}}
      >
        <Tab icon={<FireTruckIcon style={{color:"red"}}/>} iconPosition="start" label="My MOVIES" {...a11yProps(0)}/>
        <Tab icon={<PersonIcon style={{color:"red"}}/>} iconPosition="start" label="MY PROFILE" {...a11yProps(1)} />
        <Tab icon={<PanoramaVerticalSelectIcon style={{color:"red"}}/>} iconPosition="start" label="GET QUOTE" {...a11yProps(2)} />
        <Tab icon={<LogoutIcon style={{color:"red"}}/>} iconPosition="start" label="LOGOUT" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <h3> My Moves </h3>
         <Moves/>
      </TabPanel>
      <TabPanel value={value} index={1}>
         My profile

      </TabPanel>
      <TabPanel value={value} index={2}>
        get Quote

      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four

      </TabPanel>
    </Box>
    </div>
    
  );
}