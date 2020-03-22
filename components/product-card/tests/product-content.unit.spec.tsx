import React from "react";
import sinon, { SinonSpy } from "sinon";
import faker from "faker";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { ThemeProvider, Typography } from "@material-ui/core";
import { theme } from "../../../theme";
import { ProductContent } from "../product-content";

const sandbox = sinon.createSandbox();
const { random: { number }, lorem: { word, words } } = faker;

describe("Product Content Unit Tests", () => {
  let props: any;
  beforeEach(() => {
    props = {
      name: word(),
      price: number(),
      oldPrice: number()
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
      <ThemeProvider theme={theme} >
        <ProductContent {...props} />
      </ThemeProvider>
    );

    // Assert
    const spy = React.createElement as SinonSpy;
    expect(spy.calledWith(Typography)).toBe(true);
    expect(getByText(props.name)).toBeInTheDocument();
    expect(getByText(`${props.price.toString()} ₺`)).toBeInTheDocument();
    expect(getByText(`${props.oldPrice.toString()} ₺`)).toBeInTheDocument();

  });

});