import { Bundles } from "../../../models/Onboarding/domain/Bundles";
import DepositV1Form from "../DepositV1Form";
import ProductlessV1Form from "../ProductlessV1Form";
import UlocMvp1Form from "../UlocMvp1Form";
import KycForm from "../KycForm";
import CreditCardV1Form from "../CreditCardV1Form"
import PrepaidV1Form from "../PrepaidV1Form"
import UserForm from "../UserForm";
import EmptyView from "../EmptyView"

function depositV1(control: any, register: any) {
    return ( <DepositV1Form control={control} register={register} /> );
}

function productlessV1(register: any) {
    return ( <ProductlessV1Form register={register} /> );
}

function ulocMvp1(control: any, register: any) {
    return ( <UlocMvp1Form control={control} register={register} /> );
}

function kyc(control: any, register: any) {
    return ( <KycForm control={control} register={register} /> );
}

function creditCardV1(control: any, register: any) {
    return ( <CreditCardV1Form control={control} register={register} /> );
}

function prepaidV1(control: any, register: any) {
    return ( <PrepaidV1Form control={control} register={register} /> );
}

export default function OnboardingForm(props: any) {
    var form
    console.log("onboarding form bundleselected", props.bundleSelected)

    switch(props.bundleSelected) {
        case Bundles.depositV1: {
            form = depositV1(props.control, props.register)
            break
        }
        case Bundles.productlessV1: {
            form = productlessV1(props.register)
            break
        }
        case Bundles.ulocMvp1: {
            form = ulocMvp1(props.control, props.register)
            break
        }
        case Bundles.kycV1: {
            form = kyc(props.control, props.register)
            break
        }
        case Bundles.creditCardV1: {
            form = creditCardV1(props.control, props.register)
            break
        }
        case Bundles.prepaidV1: {
            form = prepaidV1(props.control, props.register)
            break
        }
        default: {
            return <EmptyView />
        }
    }

    return (
        <div>
            <UserForm />
            {form}
        </div>
    )
}