import _ from "lodash";

class MemberValueModel {
    value: string;
    code_lang: string;
    active: string;
    label: string;
    constructor(json: any) {
        this.value = _.get(json, 'value')
        this.code_lang = _.get(json, 'code_lang')
        this.active = _.get(json, 'active')
        this.label = _.get(json, 'label')
    }
}

export default MemberValueModel;
