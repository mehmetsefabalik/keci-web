import React from "react";
import Router from "next/router";
import sinon from "sinon";
import { render, cleanup } from "@testing-library/react";
import Home from "../../pages/index";
import { BottomBar } from "../../client/components/bottom-bar";
import { getPropsOfCallByComponent } from "../utils";

const sandbox = sinon.createSandbox();

describe("Home Page Unit Tests", () => {
  const props = {
    listings: [],
  };
  beforeEach(() => {
    sandbox.stub(Router, "push");
    window.fetch = sandbox
      .stub()
      .resolves({ ok: true, json: sandbox.stub().resolves([]) });
  });
  afterEach(() => {
    sandbox.verifyAndRestore();
    cleanup();
  });

  it("should render components", () => {
    // Arrange
    sandbox.spy(React, "createElement");

    // Act
    render(<Home {...props} />);

    // Assert
    const spy = React.createElement as any;
    expect(spy.calledWith(BottomBar)).toBe(true);
  });
});
