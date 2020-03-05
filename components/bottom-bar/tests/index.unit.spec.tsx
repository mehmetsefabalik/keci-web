import React from "react";
import sinon, { SinonSpy } from "sinon";
import faker from "faker";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { ThemeProvider, Button, Paper } from "@material-ui/core";
import { theme } from "../../../theme";
import { BottomBar, IProps } from "../index";
import { ArrowRight } from "@material-ui/icons";
import { getPropsOfCallByComponent } from "../../../tests/utils";

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
    render(
      <ThemeProvider theme={theme}>
        <BottomBar {...props} />
      </ThemeProvider>
    );

    // Assert
    const spy = React.createElement as any;
    expect(spy.calledWith(Button)).toBe(true);
    expect(getPropsOfCallByComponent(spy, Button).onClick).toBe(props.onBuyClick)
    expect(spy.calledWith(Paper)).toBe(true);
    expect(getPropsOfCallByComponent(spy, Paper).onClick).toBe(props.onClick)
    expect(spy.calledWith(ArrowRight)).toBe(true);
  });

});