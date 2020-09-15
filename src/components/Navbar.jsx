import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconAlerts from './IconAlerts';
import DenseAppBar from './AppBar';
import TotalPayOut from './TotalPayOut';
import MediaCard from './EventCards';
import TextField from '@material-ui/core/TextField';
import TopOwed from './TopOwed';
import Paper from '@material-ui/core/Paper';
import LineChart from './LineChart';
import Button from '@material-ui/core/Button';
import CreateEventModal from './CreatEventModal';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#f5f5f5",
        bottom: 0,
        '& .MuiTextField-root': {
            width: "100%",
        },
    },
    searchHelp: {
        width: "calc(100%-20px)",
        marginTop: "20px",
        padding: "20px",
        display:"flex"
    }
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [totPayVisibility, setTotPayVisibility] = React.useState(0)
    var status = false
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setTotPayVisibility(newValue)
    };

    const handleChangeIndex = (index) => {

        setValue(index);

    };

    const openModal = () => {
        status = true
    } 

    const searchText = () => {

    }

    return (
        <div className={classes.root}>
            <DenseAppBar />
            {!totPayVisibility ? <TotalPayOut /> : <></>}
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Listings" {...a11yProps(0)} />
                    <Tab label="Events" {...a11yProps(1)} />
                    <Tab label="Statistics" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Paper elevation={10} style={{ margin: "10px" }}>
                        {
                            [
                                { "from": "Dan", "to": "You", "cost": "₹100", "event": "Dominos" },
                                { "from": "You", "to": "Sara", "cost": "₹200", "event": "Birthday Party" },
                                { "from": "You", "to": "Guy", "cost": "₹200", "event": "Picnic" },
                                { "from": "You", "to": "Perry", "cost": "₹400", "event": "Restaurant Dinner" },
                                { "from": "Perry", "to": "You", "cost": "₹1000", "event": "Trip" },
                                { "from": "You", "to": "Jane", "cost": "₹600", "event": "Transport cost" },
                            ].map((ele) => {
                                return <IconAlerts propData={ele}></IconAlerts>
                            })
                        }
                    </Paper>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Paper elevation={3} style={{ margin: "10px" }}>
                        <div className={classes.searchHelp}>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Find Event"
                                multiline
                                size="small"
                                rowsMax={4}
                                onChange={searchText}
                                variant="outlined"
                            />
                            
                            <CreateEventModal />
                        </div>
                    </Paper>
                    <Paper elevation={3} style={{ margin: "10px" }}>
                        {
                            [
                                { "event": "Fine Dining", "spent": "2000", "date": new Date().toJSON().slice(0, 10).split("-").reverse().join("/"), "attendees": ["Sara", "Guy", "Perry"], "img": "/images/finedining.jpg" },
                                { "event": "Europe Trip", "spent": "10000", "date": new Date().toJSON().slice(0, 10).split("-").reverse().join("/"), "attendees": ["Sara", "Jim", "John", "Richard", "Jane"], "img": "/images/europetrip.jpg" },
                                { "event": "Dinner Party", "spent": "1000", "date": new Date().toJSON().slice(0, 10).split("-").reverse().join("/"), "attendees": ["Joe", "Peter", "Mary"], "img": "/images/dinner.jpg" },
                                { "event": "Amusement Park", "spent": "1500", "date": new Date().toJSON().slice(0, 10).split("-").reverse().join("/"), "attendees": ["Dan", "Guy", "Perry", "Richard"], "img": "/images/amusement.jpg" },
                                { "event": "Breakfast", "spent": "2000", "date": new Date().toJSON().slice(0, 10).split("-").reverse().join("/"), "attendees": ["Ron", "Dan", "Johnathon"], "img": "/images/bfast.jpg" },
                                { "event": "Silverstone Race", "spent": "1800", "date": new Date().toJSON().slice(0, 10).split("-").reverse().join("/"), "attendees": ["Sara", "Guy", "Perry", "Jason", "Dan", "Richard"], "img": "/images/f1.jpg" },
                            ].map((ele) => {
                                return <MediaCard propData={ele} />
                            })
                        }
                    </Paper>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Paper elevation={3} style={{ margin: "10px" }}>
                        <TopOwed />
                    </Paper>
                    <Paper elevation={3} style={{ margin: "10px" }}>
                        <LineChart />
                    </Paper>
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}
