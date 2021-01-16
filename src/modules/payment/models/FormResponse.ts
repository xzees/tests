import _ from "lodash";
import MemberModel from "./MemberModel";
import ProductModel from "./ProductModel";
import TransactionModel from "./TransactionModel";

class FormResponse {
  
  transaction: TransactionModel
  product: ProductModel
  member: MemberModel

  constructor(json: any) {
    this.transaction = new TransactionModel(_.get(json, 'transaction'))
    this.product = new ProductModel(_.get(json, 'product'))
    this.member = new MemberModel(_.get(json, 'member'))
  }
}

export default FormResponse;
