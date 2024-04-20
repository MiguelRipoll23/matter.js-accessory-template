import {
  Environment,
  StorageService,
} from "@project-chip/matter.js/environment";
import { Storage, StorageContext } from "@project-chip/matter.js/storage";
import { NODE_ENDPOINT_ID } from "../configuration/node-configuration.js";

export class ConfigurationService {
  async get(): Promise<StorageContext<Storage>> {
    const environment = Environment.default;
    const storageService = environment.get(StorageService);
    const storageManager = await storageService.open(NODE_ENDPOINT_ID);

    return storageManager.createContext("data");
  }
}
