import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';

export default function BasicTabs({ children }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const a11yProps = (index) => {
    return {
      id: `tabIndex-${index}`,
      'aria-controls': `tabpanel-${index}`,
      te: 'teste'
    };
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '80%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          <Tab label="Motorista" {...a11yProps(0)} />
          <Tab label="Veículo" {...a11yProps(1)} />
        </Tabs>

        <Typography variant="h4" align="center" sx={{ mt: 2 }}>
          Gobrax
        </Typography>
      </Box>

      {children}
    </Box>
  );
}
