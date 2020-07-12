import React from "react";
import Router from "next/router";
import { Paper, makeStyles, Tabs, Tab, Grid, Link } from "@material-ui/core";
import { Login } from "../client/containers/login";
import { Signup } from "../client/containers/signup";
import { WithNotification } from "../client/hocs/with-notification";
import { Header } from "../client/components/header";

const useStyles = makeStyles({
  root: {
    "& .MuiButtonBase-root": {
      paddingTop: "50px",
    },
    flexGrow: 1,
  },
  form: {
    marginTop: "50px",
  },
  element: {
    margin: "5px 0",
  },
});

const Giris = () => {
  const classes = useStyles();
  const [tab, setTab] = React.useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };
  return (
    <WithNotification>
      <Header showAccountIcon={false} />
      <Grid container alignItems="center" justify="center">
        <Grid item xs={12} sm={6}>
          <Paper className={classes.root}>
            <Tabs
              value={tab}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              centered
            >
              <Tab label="Giriş" />
              <Tab label="Kayıt Ol" />
            </Tabs>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.form}
      >
        <Grid item xs={10} sm={3}>
          {tab === 0 ? <Login /> : <Signup />}
          <Link
            style={{ marginTop: "10px", cursor: "pointer" }}
            onClick={() => Router.replace("/odeme?allow-guest=true")}
          >
            Kayıt Olmadan Devam Et
          </Link>
        </Grid>
      </Grid>
    </WithNotification>
  );
};

export default Giris;
