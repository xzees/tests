import React from 'react';
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
    formatFormData
} from 'utilities/CreditCardUtil';

interface IOutput {
    d: Date;
    state: any;
    setState: any;
    handleInputFocus: any;
    convertMonth: any;
    btnSubmit: any;
    handleInputChange: any;
}

const FormCreditCard = (): IOutput => {
    const d = new Date();

    const [state, setState] = React.useState<any>({
        cardNo: "4546 2899 5010 8110",
        cardHolder: "",
        securityCode: "111",
        // epMonth: "12",
        epMonth: "",
        // epYear: ""+d.getFullYear(),
        epYear: "",
        checkedB: false,
        expiry: formatExpirationDate('12'+ ( d.getFullYear().toString() ).slice(2,4) ),
        issuer: "",
        focused: "",
        formData: null
    });

    const handleInputFocus = (value: any) => {
        if (value.target.name === "cardNo") {
            setState({ ...state, ...{ focused: 'number'} })
        }else if (value.target.name === "securityCode") {
            setState({ ...state, ...{ focused: 'cvc'} })
        }else if (value.target.name === "cardHolder") {
            setState({ ...state, ...{ focused: 'name'} })
        }
    };

    const convertMonth = (value: any) => {
        if(value === '') {
            return "00"
        }
        if(value <= 9 ) {
            return "0"+ value
        }
        return value
    }

    const btnSubmit = () => {
        if(
            state.cardNo == "" ||
            state.cardHolder == "" ||
            state.securityCode == "" ||
            state.epMonth == "" ||
            state.epYear == "" || 
            state.checkedB == false
        ) {
            return true
        }
        return false
    }

    const handleInputChange = (value: any) => {
        const { target } = value;
        console.log(target.value)
        if (target.name === "cardNo") {
          target.value = formatCreditCardNumber(target.value);
          setState({ ...state, ...{ [target.name]: target.value  } })

        } else if (target.name === "securityCode") {
          target.value = formatCVC(target.value, {});
          setState({ ...state, ...{ [target.name]: target.value  } })

        }else if (target.name === "epMonth") {
            setState({ 
                ...state, 
                ...{ [target.name]: target.value  } ,
                ...{ expiry: formatExpirationDate(
                    convertMonth(target.value)
                    +''+
                    state.epYear.toString().slice(2,4)
                    ) 
                 } 
            })
        
        }else if (target.name === "epYear") {
            setState({ 
                ...state, 
                ...{ [target.name]: target.value  } ,
                ...{ expiry: formatExpirationDate(
                    convertMonth(state.epMonth) 
                    +''+ 
                    target.value.toString().slice(2,4)
                    )  
                } 
            })
        }else if (target.name === "cardHolder") {
            setState({ 
                ...state, 
                ...{ [target.name]: target.value  } 
            })
        }else{
            setState({ ...state, ...{ [target.name]: target.checked  } })
        }
    };

    return {
        d,
        state,
        setState,
        handleInputFocus,
        convertMonth,
        btnSubmit,
        handleInputChange,
    }
}

export default FormCreditCard