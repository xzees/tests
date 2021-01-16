import _ from "lodash";
import TransactionValueModel from "./TransactionValueModel";

class TransactionModel {
    success_url: string
    fail_url: string
    order_code: string
    page_lang: string
    multi_amount: boolean
    expired_at: string
    value: TransactionValueModel
    constructor(json: any) {
        this.success_url = _.get(json, 'success_url')
        this.fail_url = _.get(json, 'fail_url')
        this.order_code = _.get(json, 'order_code')
        this.page_lang = _.get(json, 'page_lang')
        this.multi_amount = _.get(json, 'multi_amount')
        this.expired_at = _.get(json, 'expired_at')
        this.value = new TransactionValueModel(_.get(json, 'value'))   
    }
}

export default TransactionModel;
