import React, { useState } from "react";
import { AppBar, Typography, Toolbar, Box, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar
      position="sticky"
      component="nav"
      sx={{
        background: "#000000E6",
      }}
    >
      <Toolbar>
        <Typography sx={{ color: "#0073B1" }} variant="h5">
          Space News
        </Typography>
        <Box display="flex" marginLeft="auto" marginRight="auto">
          <Tabs
            sx={{ color: "#0073B1" }}
            textColor="inherit"
            value={value}
            onChange={handleChange}
          >
            <Tab label="News" LinkComponent={Link} to="/" />
            <Tab label="Blog" LinkComponent={Link} to="/blogs" />
            <Tab label="Reports" LinkComponent={Link} to="/reports" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
