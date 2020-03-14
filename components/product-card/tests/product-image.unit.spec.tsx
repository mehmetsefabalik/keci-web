import React from "react";
import sinon, { SinonSpy } from "sinon";
import faker from "faker";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../../theme";
import { ProductImage } from "../product-image";

const sandbox = sinon.createSandbox();
const { random: { number }, lorem: { word, words } } = faker;

describe("Product Image Unit Tests", () => {
  afterEach(() => {
    sandbox.verifyAndRestore();
    cleanup();
  });

  it("should render required components", () => {
    // Arrange
    sandbox.spy(React, "createElement");

    // Act
    const { container, debug, getByText } = render(
      <ThemeProvider theme={theme}>
        <ProductImage />
      </ThemeProvider>
    );

    // Assert
    const spy = React.createElement as SinonSpy;
    expect(spy.calledWith("img")).toBe(true);

  });

});