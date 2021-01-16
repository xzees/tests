import _ from "lodash";

class FormGatewayModel {
  secureKey: string;
  

  constructor(json: any) {
    this.secureKey = _.get(json, "secureKey");
    
  }
}

export default FormGatewayModel;
