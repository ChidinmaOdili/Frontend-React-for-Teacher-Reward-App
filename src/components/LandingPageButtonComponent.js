import React from 'react';
import Button from "@mui/material/Button";

const LandingPageButtonComponent = ({value , sx}) => {
    return (
        <Button variant="contained"  sx={sx} >{value}</Button>
    );
};

export default LandingPageButtonComponent;
