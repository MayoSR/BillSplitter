import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      borderBottom : "1px solid rgba(0,0,0,0.1)",
      padding:"20px",
      background:"#3f51b5"
    },
    ratioBar:{
        width:"50px",
        height:"50px",
        borderRadius:"50%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        transform:"rotate(45deg)",
        background:"linear-gradient(to right, #71c174 60%,#f43325 40%)"
    },
    payOuts:{
        flexGrow:"1",
        paddingLeft:"20px",
        width:"100%",
        display:"flex",
        justifyContent:"space-evenly",
        color:"white"
    },
    titleText:{
        display:"flex",
        alignItems:"center",
        flexDirection:"column"
    },
  }));

export default function TotalPayOut() {

    const classes = useStyles();

    return (
        <div className = {classes.root}>
            <div className={classes.ratioContainer}>
                <div className={classes.ratioBar} >
                    <div style={{height:"40px",width:"40px",borderRadius:"50%",background:"#3f51b5"}} />
                </div>
            </div>
            <div className={classes.payOuts}>
                <Typography className={classes.titleText} variant="h6" gutterBottom>
                    <>Total owed <br /><span style={{color:"#71c174"}}>₹600</span></>
                </Typography>
                <Typography className={classes.titleText} variant="h6" gutterBottom>
                    <>You owe <br /><span style={{color:"#f43325"}}>₹400</span></>
                </Typography>
            </div>
        </div>
    )
}
