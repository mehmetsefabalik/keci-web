import React, { FunctionComponent } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  useTheme,
  Paper,
  Typography,
} from "@material-ui/core";

interface Props {
  header: string;
  text: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      height: "325px",
      display: "flex",
      flexDirection: "column",
      padding: "5px 0",
    },
    header: {
      fontSize: "16px",
      padding: "10px",
      overflow: "hidden",
      fontWeight: 500,
    },
    text: {
      padding: "10px",
      textOverflow: "ellipsis",
      overflow: "scroll",
      lineHeight: 1.4,
    },
  })
);

const ContentCard: FunctionComponent<Props> = ({ header, text }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Paper className={classes.paper} elevation={2}>
      <Typography className={classes.header} variant="h5">
        {header}
      </Typography>
      <Typography className={classes.text}>{text}</Typography>
    </Paper>
  );
};
export { ContentCard };
