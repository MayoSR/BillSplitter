import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import FriendSuggestion from './FriendSuggestion';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },

    },
    addFriendsImgStyle: {
        height: "30px",
        width: "30px",
        borderRadius: "50%",
    },
    friendsList: {
        padding: "0px",
        '& > li': {
            padding: "0px",
            borderLeft: "1px solid rgba(0,0,0,0.3)",
            borderBottom: "1px solid rgba(0,0,0,0.3)",
            borderRight: "1px solid rgba(0,0,0,0.3)",
            padding: "5px",
            paddingLeft: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }
    },
    findFriend: {
        position: "relative",
        paddingLeft: "10px",
        paddingRight: 0,
        
        margin:"0px 10px"
    },
    listLeftHalf: {
        display: "flex",
        alignItems: "center"
    },
    listRightHalf: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    chosenFriends: {
        display: "flex",
        justifyContent: "flex-start",
        overflowX: "scroll",
        padding: "5px 0px 15px 0px",
        '& > span': {
            marginLeft: "10px"
        }
    },
    badgeCSS: {
        '& span': {
            background: "grey",
            transform: "scale(2) translate(50%, 50%)",
        }
    },
    friendsPay: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        '& div:nth-child(1)': {
            flex: 0.6
        },
        '& div:nth-child(3)': {
            flex: 0.5
        },
        marginBottom: "15px"
    },
    friendsSuggestion: {
        position: "relative",
        display: "flex",
        flexDirection: "column"
    },
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    groupPayName: {
    },
    groupPayAmt: {
        width: "90%",

    },
    paidAmt: {
        display: "flex",
        flexDirection: "column",
    },
    labelHeaders: {
        display: "flex",
        flexDirection: "column"
    },
    groupLabels: {
        display: 'flex',
        justifyContent: "space-evenly"
    },
    payBtn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        marginTop: "20px",
        '& button': {
            padding: 0,
            paddingRight: "15px",
            margin: 0,
        },
        '& button *': {
            pointerEvents: "none"
        },
        height: "100%"
    },
    largeIcon: {
        '& svg': {
            fontSize: 100
        }
    },
    spacerDiv: {
        height: "10px",
        width: "10px"
    }


}));

export default function BasicTextFields(props) {
    const classes = useStyles();
    const deleteRow = props.delRow()
    console.log(props)
    return (
        <div className={classes.findFriend}>
            <div className={classes.friendsPay} id={`pay-row-${props.ele}`}>
                <div className={classes.friendsSuggestion}>
                    <Typography variant="caption" display="block" gutterBottom>
                        Name
                    </Typography>
                    <TextField id={`text-row-${props.ele}`} className={classes.groupPayName} label="Select" size="small" variant="outlined" fullWidth inputProps={{
                        autoComplete: 'off'
                    }} />

                </div>
                <div className={classes.spacerDiv} />
                <div className={classes.paidAmt}>
                    <Typography variant="caption" display="block" gutterBottom>
                        Amount
                    </Typography>
                    <TextField size="small" className={classes.groupPayAmt} id="outlined-basic" label="Select" variant="outlined" fullWidth inputProps={{
                        autoComplete: 'off'
                    }} />
                </div>
                <div className={classes.payBtn}>
                    <IconButton className={classes.largeIcon} aria-label="delete" className={classes.margin} id={`del-pay-row-${props.ele}`} onClick={deleteRow}>
                        <DeleteIcon />
                    </IconButton>

                </div>
            </div>

        </div>
    );
}