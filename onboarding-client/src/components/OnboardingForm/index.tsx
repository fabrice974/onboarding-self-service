import React from "react";
import DepositV1Form from "../DepositV1Form";
import ProductlessV1Form from "../ProductlessV1Form";
import UlocMvp1Form from "../UlocMvp1Form";
import KycForm from "../KycForm";
import CreditCardV1Form from "../CreditCardV1Form"
import PrepaidV1Form from "../PrepaidV1Form"

export default class OnboardingForm extends React.Component <any, any> {
    
    depositV1() {
        return ( <DepositV1Form /> );
    }

    productlessV1() {
        return ( <ProductlessV1Form /> );
    }

    ulocMvp1() {
        return ( <UlocMvp1Form /> );
    }

    kyc() {
        return ( <KycForm /> );
    }

    creditCardV1() {
        return ( <CreditCardV1Form /> );
    }

    prepaidV1() {
        return ( <PrepaidV1Form /> );
    }

    render() {
        console.log("OnboardingForm bundle selected: " + this.props.bundle)
        switch(this.props.bundle){
            case "depositV1": {
                return this.depositV1();
            }
            case "productlessV1": {
                return this.productlessV1();
            }
            case "ULOC_MVP1": {
                return this.ulocMvp1();
            }
            case "kycV1": {
                return this.kyc();
            }
            case "creditCardV1": {
                return this.creditCardV1();
            }
            case "prepaidV1": {
                return this.creditCardV1();
            }
            default: {
                return ""
            }
        }
      }
}