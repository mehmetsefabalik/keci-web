import React from "react";
import sinon from "sinon";
import faker from "faker";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { ThemeProvider, Button, Paper } from "@material-ui/core";
import { theme } from "../../../theme";
import { BottomBar, IProps } from "../index";
import { ArrowRight } from "@material-ui/icons";

const sandbox = sinon.createSandbox();
const { random: { number }, lorem: { word, words } } = faker;

describe("BottomBar Unit Tests", () => {
  let props: IProps = {
    onClick: sandbox.stub(),
    onBuyClick: sandbox.stub()
  }

  beforeEach(() => {
    props = {
      onClick: sandbox.stub(),
      onBuyClick: sandbox.stub()
    }
  })

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
        <BottomBar {...props} />
      </ThemeProvider>
    );

    // Assert
    const spy = React.createElement as any;
    expect(spy.calledWith(Button)).toBe(true);
    expect(spy.calledWith(Paper)).toBe(true);
    expect(spy.calledWith(ArrowRight)).toBe(true);

  });

});