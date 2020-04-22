import React from "react";
import sinon, { SinonSpy } from "sinon";
import { render, cleanup } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../../context/theme";
import { ProductImage } from "../product-image";

const sandbox = sinon.createSandbox();

describe("Product Image Unit Tests", () => {
  afterEach(() => {
    sandbox.verifyAndRestore();
    cleanup();
  });

  it("should render required components", () => {
    // Arrange
    sandbox.spy(React, "createElement");

    // Act
    render(
      <ThemeProvider theme={theme}>
        <ProductImage />
      </ThemeProvider>
    );

    // Assert
    const spy = React.createElement as SinonSpy;
    expect(spy.calledWith("img")).toBe(true);
  });
});
