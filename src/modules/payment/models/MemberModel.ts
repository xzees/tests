import _ from "lodash";
import MemberValueModel from "./MemberValueModel";

class MemberModel {
    code: string;
    logo: string;
    value: MemberValueModel
    constructor(json: any) {
        this.code = _.get(json, 'code')
        this.logo = _.get(json, 'logo')
        this.value = (_.get(json, 'value') || []).map((v: any) => new MemberValueModel(v))
    }
}

export default MemberModel;
