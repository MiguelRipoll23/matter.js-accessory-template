import { Node, ServerNode } from "@project-chip/matter.js/node";

export const NODE_ENDPOINT_ID = "matter-node";
export const NODE_PRODUCT_NAME = "My Matter Node";

type NodeConfigurationOptions = Partial<Node.Options<ServerNode.RootEndpoint>>;

export const NODE_CONFIGURATION: NodeConfigurationOptions = {
  id: NODE_ENDPOINT_ID,

  productDescription: {
    name: NODE_PRODUCT_NAME,
  },
  basicInformation: {
    nodeLabel: NODE_PRODUCT_NAME,
    productName: NODE_PRODUCT_NAME,
    productLabel: NODE_PRODUCT_NAME,
  },
};
