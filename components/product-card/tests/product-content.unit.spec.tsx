import React from "react";
import sinon, { SinonSpy } from "sinon";
import faker from "faker";
import { render, cleanup } from "@testing-library/react";
import { ThemeProvider, Typography } from "@material-ui/core";
import { theme } from "../../../context/theme";
import { ProductContent } from "../product-content";
import { PriceBadge } from "../price-badge";

const sandbox = sinon.createSandbox();
const {
  random: { number },
  lorem: { word },
} = faker;

describe("Product Content Unit Tests", () => {
  let props: any;
  beforeEach(() => {
    props = {
      name: word(),
      price: number(),
      oldPrice: number(),
    };
  });

  afterEach(() => {
    sandbox.verifyAndRestore();
    cleanup();
  });

  it("should render required components", () => {
    // Arrange
    sandbox.spy(React, "createElement");

    // Act
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ProductContent {...props} />
      </ThemeProvider>
    );

    // Assert
    const spy = React.createElement as SinonSpy;
    expect(spy.calledWith(Typography)).toBe(true);
    expect(spy.calledWith(PriceBadge)).toBe(true);
    expect(getByText(props.name)).toBeInTheDocument();
    expect(getByText(`${props.oldPrice.toString()} ₺`)).toBeInTheDocument();
  });
});
