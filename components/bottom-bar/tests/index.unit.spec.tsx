import React from "react";
import sinon from "sinon";
import faker from "faker";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../../theme";
import { BottomBar } from "../index";

const sandbox = sinon.createSandbox();
const { random: { number }, lorem: { word, words } } = faker;

describe("BottomBar Unit Tests", () => {
  afterEach(() => {
    sandbox.verifyAndRestore();
    cleanup();
  });

  it("should render", () => {
    // Arrange

    // Act
    const { container, debug, getByText } = render(
      <ThemeProvider theme={theme}>
        <BottomBar />
      </ThemeProvider>
    );

    // Assert

  });

});