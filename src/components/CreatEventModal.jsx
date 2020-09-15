import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import AddFriends from './AddFriends';
import FriendSuggestion from './FriendSuggestion';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    cameraContainer: {
        position: "relative",
        height: "240px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
    },
    eventImage: {
        height: "100%",
        width: "100%",
        filter: "blur(2px)",
        margin: "-2px",
        transform: "scale(1.3)"
    },
    eventImageContainer: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: "100%",
        width: "100%"
    },
    iconContainer: {
        position: "relative",
        zIndex: "10",
        color: "white",
        border: "2px solid white",
        borderRadius: "50%",
        padding: "15px",
        background: "rgba(255,255,255,0.4)"
    },
    addFriends: {
        marginTop:"20px"
    },
    addFriendSearch: {
        position: "relative",
        margin: "20px",
        marginBottom:"0px"
    },
    addNewFriend: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        '& button': {
            padding: "0px"
        },
        '& svg': {
            fontSize: 50
        }
    },
    eventDetails : {
        margin:"20px",
        marginBottom:"0px"
    },
    eventTag: {
        display: "flex",
        margin:"20px",
        marginBottom:"0px",
        '& > div' : {
            marginRight:"10px"
        }
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [displayOpen, setDisplayOpen] = React.useState(false);
    const [friendIDarr, setFriendIDarr] = React.useState([])


    const addNewPaymentRow = (e) => {
        console.log(e)
        setFriendIDarr([...friendIDarr, friendIDarr[friendIDarr.length - 1] + 1])
    }

    const deleteThisRow = (e) => {
        friendIDarr.splice(friendIDarr.indexOf(parseInt(e.target.id.split("del-pay-row-")[1])), 1)
        let narr = [...friendIDarr]
        setFriendIDarr(narr)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const searchFriend = (e) => {
        if (e.type === "focus") {
            setDisplayOpen(true)
        }
        else {
            setTimeout(() => {
                setDisplayOpen(false)
            }, 100)

        }
    }

    const addtagToEvent = (e) => {
        console.log(e.target.parentNode)
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen} >
                Create
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Create an Event
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            Create
                        </Button>
                    </Toolbar>
                </AppBar>
                <div className={classes.cameraContainer}>
                    <div className={classes.eventImageContainer}>
                        <img src="/images/europetrip.jpg" className={classes.eventImage} />
                    </div>
                    <div className={classes.iconContainer}>
                        <AddAPhotoIcon />
                    </div>
                </div>
                <div className={classes.eventDetails}>
                    <TextField className={classes.groupPayName} label="Event Name" size="small" fullWidth variant="outlined" inputProps={{
                        autoComplete: 'off'
                    }} />
                </div>
                <div className={classes.eventTag}>
                    {
                        [1, 2, 3, 4, 5].map((ele) => {
                            return (<Chip
                                size="small"
                                icon={<AddIcon />}
                                label="Food"
                                variant="outlined" 
                                color="primary"
                                onClick={addtagToEvent}
                            />)
                        })
                    }
                </div>
                <div className={classes.addFriendSearch}>
                    <div className={classes.addNewFriend}>
                        <TextField className={classes.groupPayName} label="Add Friends" size="small" variant="outlined" fullWidth onBlur={searchFriend} onFocus={searchFriend} inputProps={{
                            autoComplete: 'off'
                        }} />
                    </div>
                    {displayOpen ?
                        <FriendSuggestion addFriend={() => addNewPaymentRow} />
                        :
                        <></>
                    }
                </div>
                <div className={classes.addFriends}>
                    {
                        friendIDarr.map((ele) => {
                            return (
                                <AddFriends delRow={() => deleteThisRow} props={ele} />
                            )
                        })
                    }
                </div>

            </Dialog>
        </div>
    );
}
