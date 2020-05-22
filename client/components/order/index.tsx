import React, { FunctionComponent } from "react";
import { Order as IOrder } from "../../common/interface";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

interface Props {
  order: IOrder;
}

const Order: FunctionComponent<Props> = ({ order }) => {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <Typography>General settings</Typography>
        <Typography>I am an expansion panel</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
          Aliquam eget maximus est, id dignissim quam.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
export { Order };
