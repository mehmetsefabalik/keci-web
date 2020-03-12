import React, { FunctionComponent } from "react";
import { Paper, makeStyles, Theme, createStyles } from "@material-ui/core";
import { theme } from "../../theme";

interface IProps {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      height: theme.spacing(16),
      width: theme.spacing(16)
    },
  }),
);

const ProductCard: FunctionComponent<IProps> = () => {
  const classes = useStyles(theme);

  return <Paper className={classes.paper} elevation={3}>

  </Paper>;
};
export { ProductCard };