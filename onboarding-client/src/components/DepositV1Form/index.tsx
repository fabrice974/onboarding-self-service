import React from "react";
import CustomerInfoForm from "../CustomerInfoForm";
import AccountDetailsForm from "../AccountDetailsForm";
import ConsentsForm from "../ConsentsForm";
import EmploymentInfoForm from "../EmploymentInfoForm";
import CustomerAddressForm from "../CustomerAddressForm";

export default class DepositV1Form extends React.Component {
    render() {
        return (
            <div>
                <CustomerInfoForm />
                <EmploymentInfoForm />
                <CustomerAddressForm />
                <AccountDetailsForm />
                <ConsentsForm />
            </div>
        );
      }
}