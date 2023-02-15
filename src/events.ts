import { EventEmitter } from "eventemitter3";

const events = new EventEmitter();

events.on("doSomething", () => {
  console.log("Something happened.");
});

export { events };
