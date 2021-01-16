import React from 'react';
import _ from 'lodash';
import FormResponse from 'modules/payment/models/FormResponse';

interface Iprop {
    init: FormResponse
}

const FormHidden = (props: Iprop) => {
    const { init } = props;

    return (
        <>
            <input name={'orderRef'} value={init.transaction.order_code} type={'hidden'} />
            <input name={'successCallback'} value={init.transaction.success_url} type={'hidden'} />
            <input name={'failCallback'} value={init.transaction.fail_url} type={'hidden'} />
            <input name={'brandIdentifier'} value={init.member.code} type={'hidden'} />
            <input name={'productIdentifier'} value={init.product.code} type={'hidden'} />       
        </>
    )
}

export default FormHidden;