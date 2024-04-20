import { Endpoint } from "@project-chip/matter.js/endpoint";
import { ServerNode } from "@project-chip/matter.js/node";
import { OnOffLightSwitchDevice } from "@project-chip/matter.js/devices/OnOffLightSwitchDevice";
import { Switch1OnOffBehavior } from "./behaviors/switch1-onoff-behavior.js";

export class Switch1Endpoint {
  // Constants
  private readonly ENDPOINT_ID = "switch-1";

  // Variables
  private readonly endpoint: Endpoint<OnOffLightSwitchDevice>;

  constructor() {
    const device = OnOffLightSwitchDevice.with(
      Switch1OnOffBehavior,
    );

    this.endpoint = new Endpoint(device, {
      id: this.ENDPOINT_ID,
    });
  }

  async init(server: ServerNode): Promise<void> {
    await server.add(this.endpoint);

    this.addEventListeners();
  }

  private addEventListeners(): void {
    this.endpoint.events.identify.startIdentifying.on(() => {
      console.log(`Endpoint id ${this.ENDPOINT_ID} is identifying...`);
    });

    this.endpoint.events.identify.stopIdentifying.on(() => {
      console.log(`Endpoint id ${this.ENDPOINT_ID} has stopped identifying.`);
    });
  }
}
