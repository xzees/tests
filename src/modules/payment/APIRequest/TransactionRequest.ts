import _ from 'lodash';
import APIRequestInterface  from 'common/Manager/interface/APIRequest';
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum';
import APIConfig from 'common/Config/APIConfig';
class TransactionRequest implements APIRequestInterface {

  public method: HTTPMethodEnum = HTTPMethodEnum.POST; 
  public url: string;
  public query: any;
  public endpoint: string = APIConfig.sabuypay.paymentForm;

  public secureKey: string;

  
  constructor(query: any) {
    this.secureKey = query.secureKey
    this.url = this.endpoint
  }

  public makeBody() {
    return {
        secureKey: this.secureKey
    };
  }
  public makeHeader() {
    return {
      'Content-Type': 'application/json'
    };
  }
  public makeQuery() {
    return {};
  }
}

export default TransactionRequest;