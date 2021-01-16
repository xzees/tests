export default interface LabelTranslatorAPIInterface {
    brandIdentifier: string;
    productIdentifier: string;
    platformType: string;
    skip?: number;
    take?: number;
    filters?: object[];
    orderby?: string;
    orderdirection?: string;
}