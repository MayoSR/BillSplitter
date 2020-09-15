import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: "flex",
        flexDirection:"column",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        paddingBottom:"10px"
    },
    payIn: {
        color: "#3e8e41",
    },
    payOut: {
        color: "#f44336",
    },
    TypoCSS: {
        padding: "0px",
        margin: "0px",
        color: "rgba(0,0,0,0.4)",
        width: "100%",
        textAlign: "center"
    },
    titleText: {
        margin: "0px"
    },
    leftPartition: {
        flex: 0.3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "0px 20px"
    },
    midPartition: {
        flex: 1.4,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 20px"
    },
    rightPartition: {
        flex: 0.3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 20px",
        flexDirection: "column",
        marginLeft: "auto"
    },
    imgStyle: {
        height: "45px",
        width: "45px",
        borderRadius: "50%",
        border: "2px solid #3f51b5"
    },
    iconClass: {
        color:"#3f51b5",
        fontSize: "32px",
        marginBottom:"10px"
    },
    xactionTypo: {
        textAlign: "center"
    },
    xaction: {
        display: "flex",
        justifyContent: "center"
    },
    xactionDest: {
        marginTop: "5px"
    },
    xactionContent:{
        display:"flex",
    },
    timestamp:{
        padding: "10px",
        paddingLeft:"20px"
    }

}));

function timeConverter(){
    var hour = -1
    var mins = -1
    var timeArr = new Date().toString().split(" ").slice(1,5)
    var meridian = "AM"
    hour = parseInt(timeArr[timeArr.length - 1].split(".")[0])
    mins = timeArr[timeArr.length - 1].split(":")[1]
    console.log(timeArr[timeArr.length - 1].split(":"))
    if(hour / 12 > 1){
        hour = hour - 12
        meridian = "PM"
    }
    timeArr.pop()
    return timeArr.join(" ") + ", "+hour+":"+mins+" "+meridian
}

export default function IconAlerts(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.timestamp}>
                <Typography variant="caption" className={classes.timeTypo}>
                    {timeConverter()}
                </Typography>
            </div>
            <div className={classes.xactionContent}>
                <div className={classes.leftPartition}>
                    <img className={classes.imgStyle} src="/images/thumbnail.jpg" />
                    <Typography className={classes.xactionDest} variant="caption" >
                        {props.propData.from}
                    </Typography>
                </div>
                <div className={classes.midPartition}>
                    <div className={classes.arrowDir}>
                        <Typography className={classes.TypoCSS} gutterBottom>
                            <ArrowForwardIcon className={`${classes.iconClass}`} />
                        </Typography>
                    </div>
                    <div className={classes.xaction}>
                        {(props.propData.from === "You") ? (
                            <Typography className={classes.xactionTypo} variant="caption" >
                                Paid&nbsp;
                                <span className={classes.payOut}>
                                    {props.propData.cost}
                                </span>
                                &nbsp;for {props.propData.event}
                            </Typography>
                        ) : (
                                <Typography className={classes.xactionTypo} variant="caption" >
                                    Paid&nbsp;
                                    <span className={classes.payIn}>
                                        {props.propData.cost}
                                    </span>
                                &nbsp;for {props.propData.event}
                                </Typography>
                            )}
                    </div>

                </div>
                <div className={classes.rightPartition}>
                    <img className={classes.imgStyle} src="/images/thumbnail.jpg" />
                    <Typography className={classes.xactionDest} variant="caption" >
                        {props.propData.to}
                    </Typography>
                </div>
            </div>
        </div>
    )

}