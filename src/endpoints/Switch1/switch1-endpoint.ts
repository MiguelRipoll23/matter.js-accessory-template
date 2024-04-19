import { Endpoint } from "@project-chip/matter.js/endpoint";
import { ServerNode } from "@project-chip/matter.js/node";
import { OnOffLightSwitchDevice } from "@project-chip/matter.js/devices/OnOffLightSwitchDevice";
import { Switch1OnOffBehavior } from "./behaviors/switch1-onoff-behavior.js";

export class Switch1Endpoint {
  #endpoint: Endpoint<OnOffLightSwitchDevice>;
  #endpointId = "switch-1";

  constructor() {
    const device = OnOffLightSwitchDevice.with(
      Switch1OnOffBehavior,
    );

    this.#endpoint = new Endpoint(device, {
      id: this.#endpointId,
    });
  }

  async init(server: ServerNode): Promise<void> {
    await server.add(this.#endpoint);

    this.#addEventListeners();
  }

  #addEventListeners(): void {
    this.#endpoint.events.identify.startIdentifying.on(() => {
      console.log(`Run identify logic...`);
    });

    this.#endpoint.events.identify.stopIdentifying.on(() => {
      console.log(`Stop identify logic...`);
    });
  }
}
