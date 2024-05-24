import { OnOffLightRequirements } from "@project-chip/matter.js/devices/OnOffLightDevice";

export class Switch2OnOffBehavior extends OnOffLightRequirements.OnOffServer {
  override async on() {
    console.log("Turning switch 2 ON");
    await super.on();
  }

  override async off() {
    console.log("Turning switch 2 OFF");
    await super.off();
  }

  override initialize() {
    this.events.onOff$Changed.on((value) => {
      console.log(`Switch 2 is now ${value ? "ON" : "OFF"}`);
    });
  }
}
