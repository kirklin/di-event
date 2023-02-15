import "reflect-metadata";
import { Container, decorate, inject, injectable } from "inversify";

const container = new Container();

const TYPES = {
  ServiceA: Symbol.for("ServiceA"),
  ServiceB: Symbol.for("ServiceB"),
};

export interface IServiceA {
  doSomething(): void;
}

@injectable()
class ServiceA implements IServiceA {
  public doSomething(): void {
    console.log("ServiceA does something.");
  }
}

export interface IServiceB {
  serviceA: IServiceA;
  doSomethingElse(): void;
}
class ServiceB implements IServiceB {
  public constructor(@inject(TYPES.ServiceA)public readonly serviceA: IServiceA) {}

  public doSomethingElse(): void {
    console.log("ServiceB does something else.");
  }
}

decorate(injectable(), ServiceB);
decorate(inject(TYPES.ServiceA), ServiceB.prototype, "serviceA");

container.bind<IServiceA>(TYPES.ServiceA).to(ServiceA);
container.bind<IServiceB>(TYPES.ServiceB).to(ServiceB);

export { container, TYPES };
