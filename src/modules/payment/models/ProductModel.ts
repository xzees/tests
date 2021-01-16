import _ from "lodash";
import ProductValueModel from "./ProductValueModel";

class ProductModel {
    code: string;
    callback_url: string;
    value: ProductValueModel
    constructor(json: any) {
        this.code = _.get(json, 'code')
        this.callback_url = _.get(json, 'callback_url')
        this.value = (_.get(json, 'value') || []).map((v: any) => new ProductValueModel(v))
    }
}

export default ProductModel;
