import React from "react";
import sinon from "sinon";
import faker from "faker";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Home from "../../pages/index";
import { BottomBar } from "../../components/bottom-bar";
import { getPropsOfCallByComponent } from "../utils";

const sandbox = sinon.createSandbox();
const { random: { number }, lorem: { word, words } } = faker;

describe("Home Page Unit Tests", () => {
  beforeEach(() => {
    window.fetch = sandbox.stub().returns({ok: true, json: sandbox.stub().resolves([])});
  });
  afterEach(() => {
    sandbox.verifyAndRestore();
    cleanup();
  });

  it("should render components", () => {
    // Arrange
    sandbox.spy(React, "createElement");

    // Act
    const { container, debug } = render(<Home />);

    // Assert
    const spy = React.createElement as any;
    expect(spy.calledWith(BottomBar)).toBe(true);
  });

  it("should call onBuyClick", () => {
    // Arrange
    sandbox.spy(React, "createElement");
    const eventStub = sandbox.stub();

    // Act
    const { container, debug } = render(<Home />);
    const spy = React.createElement as any;
    getPropsOfCallByComponent(spy, BottomBar).onBuyClick({ stopPropagation: eventStub });

    // Assert
    expect(eventStub.called).toBe(true);

  });
});