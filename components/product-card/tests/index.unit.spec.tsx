import React from "react";
import sinon from "sinon";
import faker from "faker";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { ThemeProvider, Paper } from "@material-ui/core";
import { theme } from "../../../theme";
import { ProductCard } from "..";
import { ProductImage } from "../product-image";
import { ProductContent } from "../product-content";

const sandbox = sinon.createSandbox();
const { random: { number }, lorem: { word, words } } = faker;

describe("Product Card Unit Tests", () => {
  afterEach(() => {
    sandbox.verifyAndRestore();
    cleanup();
  });

  it("should render all required components", () => {
    // Arrange
    sandbox.spy(React, "createElement");

    // Act
    const { container, debug, getByText } = render(
      <ThemeProvider theme={theme}>
        <ProductCard />
      </ThemeProvider>
    );

    // Assert
    const spy = React.createElement as any;
    expect(spy.calledWith(Paper)).toBe(true);
    expect(spy.calledWith(ProductImage)).toBe(true);
    expect(spy.calledWith(ProductContent)).toBe(true);

  });
});