import _ from "lodash";

class TransactionValueModel {
    amount_fee: number
    amount_not_fee: number
    constructor(json: any) {
      this.amount_fee = _.get(json ,'amount_fee')
      this.amount_not_fee = _.get(json ,'amount_not_fee')
    }
}

export default TransactionValueModel;

