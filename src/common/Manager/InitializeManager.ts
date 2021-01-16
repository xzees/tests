import _ from "lodash";
import APIManager from "common/Manager/APIManager";

class InitializeManager {
  static default: InitializeManager = new InitializeManager();
  private stateMap: any;
  json: any;
  path: string = "";

  private constructor() {}

  rehydrate(json: any) {
    this.stateMap = json;
    this.path = _.get(json, "path");
  }

  get() {
    return this.stateMap;
  }
}

export default InitializeManager;
