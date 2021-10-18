import Copyright from "@mui/icons-material/Copyright";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, Grid, Typography } from "@mui/material";
import React from "react";
// custom css
// const useStyles = makeStyles((theme) => ({
//   footer: {
//     marginTop: "300px",
//     display: "flex",
//     justifyContent: "center",
//     width: "100%",
//     flexDirection: "column",
//     height: "300px",
//     backgroundColor: "#455a64",
//     color: "white",
//   },
//   bottomFooter: {
//     backgroundColor: "#37474f",
//     height: "100px",
//     color: "white",
//     display: "flex",
//     justifyContent: "center",
//     flexDirection: "column",
//   },
//   footerCopyright: {
//     display: "flex",
//     justifyContent: "center",
//   },
// }));

const Footer = () => {
  // const classes = useStyles();
  return (
    <Grid container>
      <Grid item container flexDirection={"column"}>
        <Grid item container>
          {/* this line is for side space of the page  */}
          <Grid item xs={false} sm={4}></Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h3">Web Hero</Typography>
          </Grid>
          {/* this line is for side space of the page  */}
          <Grid item xs={false} sm={4}></Grid>
        </Grid>
        <Grid item container>
          {/* this line is for side space of the page  */}
          <Grid item xs={false} sm={1}></Grid>
          <Grid item xs={12} sm={3}>
            <Typography>Contact</Typography>
            <Typography>Services</Typography>
            <Typography>Feedback</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography>Contact</Typography>
            <Typography>Services</Typography>
            <Typography>Feedback</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography>Contact</Typography>
            <Typography>Services</Typography>
            <Typography>Feedback</Typography>
          </Grid>
          {/* this line is for side space of the page  */}
          <Grid item xs={false} sm={1}></Grid>
        </Grid>
      </Grid>
      {/* 2nd footer  */}
      <Grid container>
        <Grid item container sx={{ m: 3 }}>
          {/* this line is for side space of the page  */}
          <Grid item xs={false} sm={3}></Grid>
          <Grid item xs={12} sm={6}>
            <Button>
              <FacebookIcon></FacebookIcon>
            </Button>
            <Button>
              <InstagramIcon></InstagramIcon>
            </Button>
            <Button>
              <LinkedInIcon></LinkedInIcon>
            </Button>
            <Button>
              <GitHubIcon></GitHubIcon>
            </Button>
          </Grid>

          {/* this line is for side space of the page  */}
          <Grid item xs={false} sm={3}></Grid>
        </Grid>

        {/* third footer  */}

        <Grid container>
          {/* this line is for side space of the page  */}
          <Grid item xs={false} sm={4}></Grid>
          <Grid item xs={12} sm={4}>
            <div>
              <Copyright />
              Web Hero 2021
            </div>
          </Grid>
          {/* this line is for side space of the page  */}
          <Grid item xs={false} sm={4}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
