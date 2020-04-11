import React from "react";
import { Paper, makeStyles, Tabs, Tab, Grid } from "@material-ui/core";
import { Login } from "../components/login";
import { Signup } from "../components/signup";

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
    <>
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
        </Grid>
      </Grid>
    </>
  );
};

export default Giris;
