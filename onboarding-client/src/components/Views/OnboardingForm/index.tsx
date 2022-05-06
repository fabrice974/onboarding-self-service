import React from "react";
import { Bundles } from "../../../models/Onboarding/domain/Bundles";
import DepositV1Form from "../DepositV1Form";
import ProductlessV1Form from "../ProductlessV1Form";
import UlocMvp1Form from "../UlocMvp1Form";
import KycForm from "../KycForm";
import CreditCardV1Form from "../CreditCardV1Form"
import PrepaidV1Form from "../PrepaidV1Form"
import UserForm from "../UserForm";

const yes = "yes"
const no = "no"

export default class OnboardingForm extends React.Component <any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            isExistingUser: yes
        }
        this.onChangeValue = this.onChangeValue.bind(this);
    }

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

    userForm() {
        console.log("isExistingUser " + this.state.isExistingUser)

        if (this.state.isExistingUser === no) {
            return <UserForm />
        }

        return ""
    }

    onChangeValue = (event: any) => {
        console.log(event.target.value);
        this.setState({ isExistingUser: event.target.value })
    }

    render() {
        console.log("OnboardingForm bundle selected: " + this.props.bundle)
        var form
        switch(this.props.bundle){
            case Bundles.depositV1: {
                form = this.depositV1()
                break
            }
            case Bundles.productlessV1: {
                form = this.productlessV1()
                break
            }
            case Bundles.ulocMvp1: {
                form = this.ulocMvp1()
                break
            }
            case Bundles.kycV1: {
                form = this.kyc()
                break
            }
            case Bundles.creditCardV1: {
                form = this.creditCardV1()
                break
            }
            case Bundles.prepaidV1: {
                form = this.prepaidV1()
                break
            }
            default: {
                return ""
            }
        }

        return (
            <form>
                <div>
                    Existing customer:
                    Yes <input type="radio" name="existingUser" value={yes} checked={this.state.isExistingUser === yes} onChange={this.onChangeValue} />
                    No <input type="radio" name="existingUser" value={no} checked={this.state.isExistingUser === no} onChange={this.onChangeValue} />
                </div>

                {this.userForm()}

                
                {form}
            </form>
        )
    }
}