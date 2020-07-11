import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { ContentCard } from "../../components/content-card";
import { ProductCard } from "../../components/product-card";

interface Props {
  items: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    products: {
      display: "flex",
      justifyContent: "space-between",
      margin: "10px",
    },
    contents: {
      display: "flex",
      justifyContent: "space-between",
      margin: "10px",
    },
    basket: { maxHeight: "50vh", marginBottom: "70px" },
  })
);

const Listing: FunctionComponent<Props> = ({ items }) => {
  const classes = useStyles();
  return (
    <div className={classes.products}>
      <Grid container spacing={1} alignItems="center" justify="center">
        {Array.isArray(items) &&
          items.map((listing, i) =>
            listing.type === "product" ? (
              <Grid key={i.toString()} item xs={6} md={3} lg={2}>
                <ProductCard
                  id={listing.product._id.$oid}
                  name={listing.product.name}
                  price={listing.product.price}
                  oldPrice={listing.product.old_price}
                  imageUrl={listing.product.image_url}
                />
              </Grid>
            ) : (
              <Grid key={i.toString()} item xs={6} md={3} lg={2}>
                <ContentCard header={listing.header} text={listing.text} />
              </Grid>
            )
          )}
      </Grid>
    </div>
  );
};
export { Listing };
