import {
  Environment,
  StorageService,
} from "@project-chip/matter.js/environment";
import { ENDPOINT_ID } from "../matter-node.js";
import { Storage, StorageContext } from "@project-chip/matter.js/storage";

export class ConfigurationService {
  async get(): Promise<StorageContext<Storage>> {
    const environment = Environment.default;
    const storageService = environment.get(StorageService);
    const storageManager = await storageService.open(ENDPOINT_ID);

    return storageManager.createContext("data");
  }
}
