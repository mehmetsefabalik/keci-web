import { SinonSpy } from "sinon";


/* istanbul ignore next */
export const logArgsOfCalls = (spy: SinonSpy) => {
  for (const call of spy.getCalls()) {
    console.log(call.args);
  }
}

/* istanbul ignore next */
export const getPropsOfCallByComponent = (spy: SinonSpy, component: any): any => {
  const calls = spy?.getCalls();
  if (!Array.isArray(calls)) {
    return {};
  }
  const call: any = calls.find(call => Array.isArray(call.args) && call.args.length && call.args[0] == component)
  if (!call || !Array.isArray(call.args) || call.args.length < 2) {
    return {};
  }
  return call.args[1]
}