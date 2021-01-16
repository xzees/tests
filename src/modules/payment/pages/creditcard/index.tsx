import React from 'react';
import { Container, CssBaseline } from "@material-ui/core"
import Header from 'modules/payment/component/Header'
import Footer from 'modules/payment/component/Footer'
import CompanyBox from 'modules/payment/component/CompanyBox'
import FormPaymentCreditCard from 'modules/payment/component/FormPaymentCreditCard';
import InitializeManager from 'common/Manager/InitializeManager';
import FormResponse from 'modules/payment/models/FormResponse';
import _ from 'lodash'
import MemberValueModel from 'modules/payment/models/MemberValueModel';
import ProductValueModel from 'modules/payment/models/ProductValueModel';

const isClient = typeof window === 'object';

const index = (props: any) => {
  let init: FormResponse;
  if (!isClient) {
    init =  new FormResponse(JSON.parse(InitializeManager.default.get()).data.form)
  } else {
    init =  new FormResponse(InitializeManager.default.get().data.form)
  }

  const memberName = new MemberValueModel(_.find(init.member.value, (v: any) => v.label == 'name', undefined))
  const memberAddress = new MemberValueModel(_.find(init.member.value, (v: any) => v.label == 'address', undefined))
  const productName = new ProductValueModel(_.find(init.product.value, (v: any) => v.label == 'label', undefined))

  return (
    <>
      <CssBaseline />
      <Header />
      <div style={{
        backgroundColor: '#10bed7bf',
        position: 'relative'
      }}>
          <Container maxWidth="md">
            <div style={{
              paddingTop: '1rem',
              paddingBottom: '1rem'
            }}>
            <CompanyBox  
              post={{
                title: 'ท่านกำลังชำระค่าบริการ',
                company: memberName.value ,
                order: {
                  title: productName.value ,
                  order_code: init.transaction.order_code,
                  amount: init.transaction.value.amount_fee,
                  address: memberAddress.value
                },
                logo: init.member.logo,
                logoTitle: memberName.value ,
              }}
            />
            </div>
          </Container>
        </div>
        <Container maxWidth="md">
          <FormPaymentCreditCard init={init} />
        </Container>
      <Footer />
    </>
  )
  
}

export default index;