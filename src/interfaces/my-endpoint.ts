import { ServerNode } from "@project-chip/matter.js/node";

export interface BaseEndpoint {
  readonly ENDPOINT_ID: string;
  init(server: ServerNode): Promise<void>;
}
