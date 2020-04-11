import React from "react";
import {
  Paper,
  makeStyles,
  Tabs,
  Tab,
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

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
});

const Giris = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={12} sm={6}>
          <Paper className={classes.root}>
            <Tabs
              value={value}
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
        <Grid item xs={10} sm={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default Giris;
