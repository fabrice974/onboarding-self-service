import React from "react";
import Select from 'react-select'
import AddressForm from "../AddressForm";

export default class CustomerAddressForm extends React.Component {

    citizenships = [ 
        {value: "CA", label: "Canada"},
    ]

    render() {
        return (
            <div>
                <div> Customer Address Info: </div>
                <div>
                    <input type="checkbox" name="isCanadianResident" defaultValue="true" />
                    <input type="text" name="sinToken" placeholder="sin token" />
                    <Select className="select" options={this.citizenships} />

                    <AddressForm />
                </div>
            </div>
        );
      }
}