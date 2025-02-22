import React from "react";
import sinon from "sinon";
import faker from "faker";
import { render, cleanup } from "@testing-library/react";
import { ThemeProvider, Paper } from "@material-ui/core";
import { theme } from "../../../context/theme";
import { ProductCard } from "..";
import { ProductImage } from "../product-image";
import { ProductContent } from "../product-content";

const sandbox = sinon.createSandbox();
const {
  random: { number },
  lorem: { words },
} = faker;

describe("Product Card Unit Tests", () => {
  const props: any = {};
  beforeEach(() => {
    props.name = words(3);
    props.price = number();
    props.oldPrice = number();
    props.imageUrl = words(3);
  });
  afterEach(() => {
    sandbox.verifyAndRestore();
    cleanup();
  });

  it("should render all required components", () => {
    // Arrange
    sandbox.spy(React, "createElement");

    // Act
    render(
      <ThemeProvider theme={theme}>
        <ProductCard {...props} />
      </ThemeProvider>
    );

    // Assert
    const spy = React.createElement as any;
    expect(spy.calledWith(Paper)).toBe(true);
    expect(spy.calledWith(ProductImage)).toBe(true);
    expect(spy.calledWith(ProductContent)).toBe(true);
  });
});
