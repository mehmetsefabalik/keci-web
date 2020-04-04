import React from "react";
import sinon, { SinonSpy } from "sinon";
import faker from "faker";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { ThemeProvider, Button, Paper, Typography } from "@material-ui/core";
import { theme } from "../../../context/theme";
import { BottomBar, IProps } from "../index";
import { ShoppingCart } from "@material-ui/icons";
import { getPropsOfCallByComponent, logArgsOfCalls, getArgsOfCallByComponent } from "../../../tests/utils";

const sandbox = sinon.createSandbox();
const { random: { number }, lorem: { word, words } } = faker;

describe("BottomBar Unit Tests", () => {
  let props: IProps = {
    onClick: sandbox.stub(),
    onBuyClick: sandbox.stub(),
    price: word(),
  }

  beforeEach(() => {
    props = {
      onClick: sandbox.stub(),
      onBuyClick: sandbox.stub(),
      price: word(),
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
    const { getByText } = render(
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
    expect(spy.calledWith(ShoppingCart)).toBe(true);
    expect(spy.calledWith(Typography)).toBe(true);
    expect(getArgsOfCallByComponent(spy, Typography, 1)[2]).toBe(props.price);
    expect(getByText(`${props.price}₺`)).toBeInTheDocument();
  });

});