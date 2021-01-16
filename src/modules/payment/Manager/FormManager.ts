import Axios from 'axios';
import APIManager from 'common/Manager/APIManager';
import _ from 'lodash';
import TransactionRequest from 'modules/payment/APIRequest/TransactionRequest'
import FormGatewayModel from '../models/FormGatewayModel';

class FormManager {

  public static default: FormManager = new FormManager();

  private constructor() { }

  async getTransaction(secureKey: FormGatewayModel) {
    const apiRequest = new TransactionRequest({
        secureKey: secureKey.secureKey
    });
    return APIManager.default.fetch(apiRequest);
  }


}

export default FormManager;