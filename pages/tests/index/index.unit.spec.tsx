import React from "react";
import sinon from "sinon";
import faker from "faker";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Home from "../../index";
import { BottomBar } from "../../../components/bottom-bar";

const sandbox = sinon.createSandbox();
const { random: { number }, lorem: { word, words } } = faker;

describe("Home Page Unit Tests", () => {
  afterEach(() => {
    sandbox.verifyAndRestore();
    cleanup();
  });

  it("should render components", () => {
    // Arrange
    sandbox.spy(React, "createElement");

    // Act
    const {container, debug} = render(<Home />)
    debug();
    const spy = React.createElement as any;
    console.log(spy.getCall(1).args)
    // Assert
    expect(spy.calledWith(BottomBar)).toBe(true);

  });
});