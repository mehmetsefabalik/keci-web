import React from "react";
import sinon, { SinonStub } from "sinon";
import faker from "faker";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { ThemeProvider, SwipeableDrawer } from "@material-ui/core";
import { theme } from "../../../context/theme";
import { BottomDrawer } from "..";
import { Props } from "../index";
import { getPropsOfCallByComponent } from "../../../tests/utils";
import { basketFactory } from "../../../tests/factories";
import { BasketProvider } from "../../../context/basket";

const sandbox = sinon.createSandbox();
const { random: { number }, lorem: { word, words } } = faker;

describe("BottomDrawer Unit Tests", () => {
  let props: Props = {
    open: false,
    setOpen: sandbox.stub()
  };
  let totalAmount = number({ min: 1 });
  let basket = basketFactory();

  afterEach(() => {
    props = {
      open: false,
      setOpen: sandbox.stub()
    };
    sandbox.verifyAndRestore();
    cleanup();
  });

  it("should render SwipeableDrawer", () => {
    // Arrange
    const spy = sandbox.spy(React, "createElement");

    // Act
    render(
      <BasketProvider value={{ basket, totalAmount }}>
        <ThemeProvider theme={theme}>
          <BottomDrawer {...props} />
        </ThemeProvider>
      </BasketProvider>
    );

    // Assert
    expect(spy.calledWith(SwipeableDrawer)).toBe(true);
    expect(getPropsOfCallByComponent(spy, SwipeableDrawer).anchor).toBe('bottom');
    expect(getPropsOfCallByComponent(spy, SwipeableDrawer).open).toBe(props.open);
    expect(getPropsOfCallByComponent(spy, SwipeableDrawer).disableBackdropTransition).toBe(true);
    expect(getPropsOfCallByComponent(spy, SwipeableDrawer).disableDiscovery).toBe(true);
    expect(getPropsOfCallByComponent(spy, SwipeableDrawer).disableSwipeToOpen).toBe(true);
  });

  it("should call props.setOpen with `false` parameter", () => {
    // Arrange
    const spy = sandbox.spy(React, "createElement");
    props.open = true;
    // Act
    const { debug } = render(
      <BasketProvider value={{ basket, totalAmount }}>
        <ThemeProvider theme={theme}>
          <BottomDrawer {...props} />
        </ThemeProvider>
      </BasketProvider>
    );
    getPropsOfCallByComponent(spy, SwipeableDrawer).onClose();

    // Assert
    expect((props.setOpen as SinonStub).calledWithExactly(false)).toBe(true);
  });

  it("should call props.setOpen with `true` parameter", () => {
    // Arrange
    const spy = sandbox.spy(React, "createElement");
    props.open = true;
    // Act
    const { debug } = render(
      <BasketProvider value={{ basket, totalAmount }}>
        <ThemeProvider theme={theme}>
          <BottomDrawer {...props} />
        </ThemeProvider>
      </BasketProvider>
    );
    getPropsOfCallByComponent(spy, SwipeableDrawer).onOpen();

    // Assert
    expect((props.setOpen as SinonStub).calledWithExactly(true)).toBe(true);
  });

});