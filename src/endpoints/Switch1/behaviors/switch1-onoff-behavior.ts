import { OnOffLightRequirements } from "@project-chip/matter.js/devices/OnOffLightDevice";

export class Switch1OnOffBehavior extends OnOffLightRequirements.OnOffServer {
  override async on() {
    console.log("Turning switch 1 ON");
    await super.on();
  }

  override async off() {
    console.log("Turning switch 1 OFF");
    await super.off();
  }

  override initialize() {
    this.events.onOff$Change.on((value) => {
      console.log(`Switch 1 is now ${value ? "ON" : "OFF"}`);
    });
  }
}
