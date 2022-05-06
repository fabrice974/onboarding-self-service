import React from "react";
import Select from 'react-select'
import AddressForm from "../AddressForm";

export default class EmploymentInfoForm extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {
            employmentStatus: null
        }
    }

    employmentStatuses = [ {value: "EMPLOYMENT_STATUS_EMPLOYED", label: "employed"},
        {value: "EMPLOYMENT_STATUS_UNEMPLOYED", label: "unemployed"},
        {value: "EMPLOYMENT_STATUS_RETIRED", label: "retired"},
    ]

    render() {
        return (
            <div>
                <div> Employment Info: </div>
                <div>
                    <Select className="select" options={this.employmentStatuses} />
                    <input type="email" name="status" defaultValue="EMPLOYMENT_STATUS_UNEMPLOYED" placeholder="employment status" />
                    <AddressForm />
                    <input type="text" name="industry" defaultValue="111110" placeholder="industry" />
                </div>
            </div>
        );
      }
}