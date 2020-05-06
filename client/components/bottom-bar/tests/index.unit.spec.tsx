import React from "react";
import sinon from "sinon";
import faker from "faker";
import { render, cleanup } from "@testing-library/react";
import {
  ThemeProvider,
  Button,
  Paper,
  Typography,
  Badge,
} from "@material-ui/core";
import { theme } from "../../../context/theme";
import { BottomBar, Props } from "../index";
import { ShoppingCart } from "@material-ui/icons";
import { getPropsOfCallByComponent } from "../../../../tests/utils";
import { basketFactory } from "../../../../tests/factories";
import { BasketProvider } from "../../../context/basket";

const sandbox = sinon.createSandbox();
const {
  random: { number },
} = faker;

describe("BottomBar Unit Tests", () => {
  let props: Props = {
    onClick: sandbox.stub(),
    onBuyClick: sandbox.stub(),
  };
  let totalAmount = number({ min: 1 });
  const basket = basketFactory();

  beforeEach(() => {
    totalAmount = number({ min: 1 });
    props = {
      onClick: sandbox.stub(),
      onBuyClick: sandbox.stub(),
    };
  });

  afterEach(() => {
    sandbox.verifyAndRestore();
    cleanup();
  });

  it("should render", () => {
    // Arrange
    sandbox.spy(React, "createElement");

    // Act
    const { getByText } = render(
      <BasketProvider value={{ basket, totalAmount }}>
        <ThemeProvider theme={theme}>
          <BottomBar {...props} />
        </ThemeProvider>
      </BasketProvider>
    );

    // Assert
    const spy = React.createElement as any;
    expect(spy.calledWith(Button)).toBe(true);
    expect(getPropsOfCallByComponent(spy, Button).onClick).toBe(
      props.onBuyClick
    );
    expect(spy.calledWith(Paper)).toBe(true);
    expect(getPropsOfCallByComponent(spy, Paper).onClick).toBe(props.onClick);
    expect(spy.calledWith(ShoppingCart)).toBe(true);
    expect(spy.calledWith(Typography)).toBe(true);
    expect(spy.calledWith(Badge)).toBe(true);
    expect(getByText(`${totalAmount}₺`)).toBeInTheDocument();
  });

  it("should not show total amount if it is 0", () => {
    // Arrange
    totalAmount = 0;

    // Act
    const { queryByText } = render(
      <BasketProvider value={{ basket, totalAmount }}>
        <ThemeProvider theme={theme}>
          <BottomBar {...props} />
        </ThemeProvider>
      </BasketProvider>
    );

    // Assert
    expect(queryByText(`${totalAmount}₺`)).toBeNull();
  });
});
