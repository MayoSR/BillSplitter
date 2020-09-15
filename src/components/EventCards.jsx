import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import React from 'react';


const useStyles = makeStyles((theme) => ({

    peopleIcons: {
        display: "flex",
    },
    innerText: {
        padding: "10px"
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    rightDivider: {
        display: "flex",
        flexDirection: "column",
    },
    leftDivider: {
        display: "flex",
        flexDirection: "column",
        flexGrow: "1"
    },
    imageDivider: {

    },
    imgStyle: {
        height: "40px",
        width: "40px",
        borderRadius: "50%",
        border: "2px solid #3f51b5",
        marginRight: "20px"
    },
    avatarGroup: {
        "& div:nth-child(4)": {
            width: theme.spacing(3),
            height: theme.spacing(3),
            fontSize: "12px"
        }
    },
    divider: {
        display: "flex",
        padding:"10px 20px",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
    },
    container:{
        height:"100%"
    }
}));

export default function MediaCard(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className={classes.container}>

            <div className={classes.divider}>
                <div className={classes.imageDivider}>
                    <img className={classes.imgStyle} src="/images/thumbnail.jpg" />
                </div>
                <div className={classes.leftDivider}>
                    <Typography gutterBottom variant="subtitle1" style={{ marginBottom: "0px", flex: "0.7" }}>
                        {props.propData.event}
                    </Typography>
                    <Typography variant="caption" display="block" style={{ marginLeft: "1px" }}>
                        {props.propData.date}
                    </Typography>
                </div>
                <div className={classes.rightDivider}>
                    <Typography gutterBottom variant="subtitle1" style={{ marginBottom: "0px", flex: "0.3", textAlign: "right" }}>
                        ₹{new Intl.NumberFormat('en-IN').format(props.propData.spent)}
                    </Typography>
                    <AvatarGroup max={4} className={classes.avatarGroup} >
                        {
                            props.propData.attendees.map((ele) => {
                                return <Avatar alt={ele} className={classes.small} />
                            })
                        }
                    </AvatarGroup>
                </div>
            </div>
        </div>

    );
}
