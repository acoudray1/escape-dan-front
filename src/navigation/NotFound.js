import React from "react";
import { Typography, Button } from "@mui/material";
// import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
        {/* <Typography variant="h2">404: page not found!</Typography>*/}
        <Typography variant="h2">Page not found :'(</Typography>
        <Button variant="contained" color="primary" href="/">
            Go Home
        </Button>
    </div>
  );
};
