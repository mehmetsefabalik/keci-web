import React from "react";
import sinon from "sinon";
import faker from "faker";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { ThemeProvider, Button, Paper } from "@material-ui/core";
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
    sandbox.spy(React, "createElement");

    // Act
    const { container, debug, getByText } = render(
      <ThemeProvider theme={theme}>
        <BottomBar />
      </ThemeProvider>
    );

    // Assert
    const spy = React.createElement as any;
    expect(spy.calledWith(Button)).toBe(true);
    expect(spy.calledWith(Paper)).toBe(true);

  });

});