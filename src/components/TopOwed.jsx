import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TableDisplay from './TableDisplay'
import LineChart from './LineChart';

const useStyles = makeStyles((theme) => ({
    listStructure: {
        margin: "20px",
    },
    tableSeparator: {
        display: "flex",
        justifyContent: "center"
    }
}));

export default function TopOwed() {
    const classes = useStyles()

    return (
        <div>
            <Typography variant="h6" gutterBottom style={{ padding: "20px", paddingBottom: "10px" }}>
                Top Owers
            </Typography>
            <div className={classes.tableSeparator}>
                <TableDisplay propData={
                    [
                        { name: 'Dan', owed: 8000 },
                        { name: 'Guy', owed: 4500 },
                        { name: 'Jake', owed: 2300 },
                    ]
                } />
            </div>

        </div>
    )
}
