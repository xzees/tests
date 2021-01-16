import express, { Response } from 'express';
import _ from 'lodash';
import FormManager from '../Manager/FormManager';
import FormGatewayModel from '../models/FormGatewayModel';
import FormResponse from '../models/FormResponse';

const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true })

const PaymentGateway = express();

PaymentGateway.get('/creditcard', urlencodedParser, async (req: any, res: Response, next) => {
    const formGatewayModel = new FormGatewayModel(req.query);
    const formData = await FormManager.default.getTransaction(formGatewayModel);
    (req as any).DataGateway = {
        form: new FormResponse(formData.data)
    };
    next();
});

PaymentGateway.post('/creditcard', urlencodedParser, async (req: any, res: Response, next) => {
    try{
        const formGatewayModel = new FormGatewayModel(req.body);
        const formData = await FormManager.default.getTransaction(formGatewayModel);
        (req as any).DataGateway = {
            form: new FormResponse(formData.data)
        };
        
        next();
    }catch{
        res.header('HTTP/1.1 301 Moved Permanently');
        res.redirect('https://www.thaitravelcenter.com/');
    }
    
});



export default PaymentGateway;


