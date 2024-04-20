import "@project-chip/matter-node.js";

import { requireMinNodeVersion } from "@project-chip/matter-node.js/util";
import { NODE_CONFIGURATION } from "./configuration/node-configuration.js";
import { logEndpoint } from "@project-chip/matter.js/device";
import { EndpointServer } from "@project-chip/matter.js/endpoint";
import { ServerNode } from "@project-chip/matter.js/node";
import { Switch1Endpoint } from "./endpoints/Switch1/switch1-endpoint.js";
import { Switch2Endpoint } from "./endpoints/Switch2/switch2-endpoint.js";

requireMinNodeVersion(16);

async function main() {
  const server = await ServerNode.create(NODE_CONFIGURATION);

  await addEndpointsToServer(server);

  logEndpoint(EndpointServer.forEndpoint(server));

  await server.run();
}

async function addEndpointsToServer(server: ServerNode) {
  await new Switch1Endpoint().init(server);
  await new Switch2Endpoint().init(server);
}

main().catch((error) => console.error(error));
