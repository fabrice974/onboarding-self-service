import CustomerInfoForm from "../CustomerInfoForm";
import AccountDetailsForm from "../AccountDetailsForm";
import ConsentsForm from "../ConsentsForm";
import EmploymentInfoForm from "../EmploymentInfoForm";
import CustomerAddressForm from "../CustomerAddressForm";

export default function UlocMvp1Form(props: any) {
        return (
            <div>
                <CustomerInfoForm register={props.register} />
                <EmploymentInfoForm control={props.control} register={props.register} />
                <CustomerAddressForm control={props.control} register={props.register} />
                <AccountDetailsForm control={props.control} register={props.register} />
                <ConsentsForm control={props.control} register={props.register} />
            </div>
        );
}