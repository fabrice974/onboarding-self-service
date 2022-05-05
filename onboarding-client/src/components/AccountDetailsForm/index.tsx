import React from "react";
import Select from 'react-select'

export default class AccountDetailsForm extends React.Component {
    
    accountPurposes = [ 
        {value: "ACCOUNT_PURPOSE_EVERYDAY_TRANSACTIONS", label: "Every day transactions"},
    ]

    primarySourceOfFunds = [ {
        value: "PRIMARY_SOURCE_OF_FUNDS_EMPLOYMENT_INCOME_SUCH_AS_SALARY_OR_SELF_EMPLOYMENT_INCOME", label: "Salary or Self employment income"},
    ]

    render() {
        return (
            <div>
                <div> Account Details Info: </div>
                <div>
                    <Select className="select" options={this.accountPurposes} />
                    <Select className="select" options={this.primarySourceOfFunds} />
                    <input type="text" name="primarySourceOfFunds" defaultValue="COMPANY" placeholder="first name" />
                    <input type="checkbox" name="authorizedThirdPartyUsage" placeholder="authorized third party usage" />
                </div>
            </div>
        );
      }
}