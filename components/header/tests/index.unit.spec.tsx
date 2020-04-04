import React from "react";
import sinon from "sinon";
import faker from "faker";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { ThemeProvider, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { theme } from "../../../context/theme";
import { Header } from "..";
import { Menu } from "@material-ui/icons";

const sandbox = sinon.createSandbox();
const { random: { number }, lorem: { word, words } } = faker;

describe("Header Unit Tests", () => {
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
        <Header />
      </ThemeProvider>
    );

    // Assert
    const spy = React.createElement as any;
    expect(spy.calledWith(AppBar)).toBe(true);
    expect(spy.calledWith(Toolbar)).toBe(true);
    expect(spy.calledWith(IconButton)).toBe(true);
    expect(spy.calledWith(Menu)).toBe(true);

  });

});