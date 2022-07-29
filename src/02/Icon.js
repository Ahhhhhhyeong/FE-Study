import React from 'react';
import Button from '@mui/material/Button';
import  {useStyles}  from "./style";
import { Home, Send, Person } from "@material-ui/icons";

function Icon() {
    const classes = useStyles();
    return (
        <div>
            <Button className={classes.btn}>Change default props</Button>
            <Home />
            <Send />
            <Person />
        </div>
    );
}

export default Icon;