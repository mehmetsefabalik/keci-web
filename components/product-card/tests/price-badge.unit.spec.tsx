import React from "react";
import sinon from "sinon";
import faker from "faker";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../../theme";
import { PriceBadge } from "../price-badge";

const sandbox = sinon.createSandbox();
const { random: { number }, lorem: { word, words } } = faker;

describe("Badge Unit Tests", () => {
  afterEach(() => {
    sandbox.verifyAndRestore();
    cleanup();
  });

  it("should render", () => {
    // Arrange
    const text = words(3);
    const price = number().toString();

    // Act
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <PriceBadge price={price} text={text} />
      </ThemeProvider>
    );

    // Assert
    expect(getByText(`${price}₺`)).toBeInTheDocument();
    expect(getByText(text)).toBeInTheDocument();

  });

});