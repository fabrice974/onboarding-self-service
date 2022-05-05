import React from "react";
import OnboardingForm from "../../components/OnboardingForm";
import Select from 'react-select'

export default class Onboarding extends React.Component <any, any> {
    constructor(props: any) {
        super(props)
        this.handleBundleChange = this.handleBundleChange.bind(this)
        this.state = {
            bundleSelected: null
        }
    }

    bundles = [ {value: "productlessV1", label: "product less"},
        {value: "prepaidV1", label: "prepaid"},
        {value: "depositV1", label: "deposit"},
        {value: "kycV1", label: "kyc"},
        {value: "creditCardV1", label: "credit card"},
    ]

    handleBundleChange = (bundleSelectedOption: any) => {
        console.log(`Option selected:`, bundleSelectedOption);
        this.setState({ bundleSelected: bundleSelectedOption.value });
    };

    render() {
        return (
            <div>
                <h1>Onboarding self service</h1>

                <div className="onboarding-infos-container">
                    Product bundle:
                    <Select className="select" onChange={this.handleBundleChange} options={this.bundles} />

                    <OnboardingForm bundle={this.state.bundleSelected} />

                    <button>Create product</button>
                </div>
            </div>
        );
      }
}