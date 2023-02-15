import type { IServiceA, IServiceB } from "./container";
import { TYPES, container } from "./container";
import { events } from "./events";

const serviceA: IServiceA = container.get(TYPES.ServiceA);
const serviceB: IServiceB = container.get(TYPES.ServiceB);

serviceA.doSomething();
serviceB.doSomethingElse();

events.emit("doSomething");
