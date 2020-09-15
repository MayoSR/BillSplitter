import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Typography from '@material-ui/core/Typography';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles((theme) => ({
    listLeftHalf: {
        display: "flex",
        alignItems: "center",
        '& div': {
            minWidth: "auto"
        }
    },
    listRightHalf: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
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
    addFriendsImgStyle: {
        height: "30px",
        width: "30px",
        borderRadius: "50%",
    },
    dropDownInput: {
        position: "absolute",
        left: 0,
        right: 0,
        border: "1px solid rgba(0,0,0,0.2)",
        background: "white",
        borderBottomRightRadius: "5px",
        borderBottomLeftRadius: "5px",
        zIndex: 2,
        "& li": {
            padding: "10px 5px",
            borderBottom: "1px solid rgba(0,0,0,0.2)",
            width: "100%"
        },
        "& ul": {
            padding: "0px",
        }
    },
    menuItemDivContainer: {
        display: "flex",
        alignItems:"center",
        width: "100%"
    },
    personName : {
        marginLeft:"10px"
    }
}))

export default function FriendSuggestion(props) {
    const classes = useStyles();
    const addFriendRow = props.addFriend()
    console.log(addFriendRow)
    return (
        <div className={classes.dropDownInput}>
            {

                ["msg1", "msg2", "msg3", "msg4"].map((ele) => {
                    return (<MenuList className={classes.friendsList}>
                        <MenuItem  onClick={addFriendRow}>
                            <div className={classes.menuItemDivContainer}>
                                <div className={classes.listLeftHalf}>
                                    <ListItemIcon>
                                        <img className={classes.addFriendsImgStyle} src="/images/thumbnail.jpg" />
                                    </ListItemIcon>
                                </div>
                                <div className={classes.personName}>
                                    <Typography variant="inherit" id={"id-" + ele}>
                                        {ele}
                                    </Typography>
                                </div>
                            </div>
                        </MenuItem>
                    </MenuList>
                    )
                })

            }
        </div>
    )

}
