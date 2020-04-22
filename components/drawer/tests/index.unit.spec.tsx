import React from "react";
import sinon, { SinonStub } from "sinon";
import faker from "faker";
import { render, cleanup } from "@testing-library/react";
import { ThemeProvider, SwipeableDrawer } from "@material-ui/core";
import { theme } from "../../../context/theme";
import { Drawer } from "..";
import { Props } from "../index";
import { getPropsOfCallByComponent } from "../../../tests/utils";
import { basketFactory } from "../../../tests/factories";
import { BasketProvider } from "../../../context/basket";

const sandbox = sinon.createSandbox();
const {
  random: { number },
} = faker;

describe("Drawer Unit Tests", () => {
  let props: Props = {
    open: false,
    setOpen: sandbox.stub(),
    anchor: "bottom",
  };
  const totalAmount = number({ min: 1 });
  const basket = basketFactory();

  afterEach(() => {
    props = {
      open: false,
      setOpen: sandbox.stub(),
      anchor: "bottom",
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
          <Drawer {...props} />
        </ThemeProvider>
      </BasketProvider>
    );

    // Assert
    expect(spy.calledWith(SwipeableDrawer)).toBe(true);
    expect(getPropsOfCallByComponent(spy, SwipeableDrawer).anchor).toBe(
      "bottom"
    );
    expect(getPropsOfCallByComponent(spy, SwipeableDrawer).open).toBe(
      props.open
    );
    expect(
      getPropsOfCallByComponent(spy, SwipeableDrawer).disableBackdropTransition
    ).toBe(true);
    expect(
      getPropsOfCallByComponent(spy, SwipeableDrawer).disableDiscovery
    ).toBe(true);
    expect(
      getPropsOfCallByComponent(spy, SwipeableDrawer).disableSwipeToOpen
    ).toBe(true);
  });

  it("should call props.setOpen with `false` parameter", () => {
    // Arrange
    const spy = sandbox.spy(React, "createElement");
    props.open = true;
    // Act
    render(
      <BasketProvider value={{ basket, totalAmount }}>
        <ThemeProvider theme={theme}>
          <Drawer {...props} />
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
    render(
      <BasketProvider value={{ basket, totalAmount }}>
        <ThemeProvider theme={theme}>
          <Drawer {...props} />
        </ThemeProvider>
      </BasketProvider>
    );
    getPropsOfCallByComponent(spy, SwipeableDrawer).onOpen();

    // Assert
    expect((props.setOpen as SinonStub).calledWithExactly(true)).toBe(true);
  });
});
