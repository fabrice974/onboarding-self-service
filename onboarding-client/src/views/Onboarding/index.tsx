import React from "react";
import Select from 'react-select'
import OnboardingForm from "../OnboardingForm";
import OnboardingProcess from "../OnboardingProcess";
import { Bundles } from "../../types/bundles"

export default class Onboarding extends React.Component <any, any> {
    constructor(props: any) {
        super(props)
        this.handleBundleChange = this.handleBundleChange.bind(this)
        this.state = {
            bundleSelected: null
        }
    }

    bundleLabels = new Map<string, string>([
        [Bundles.productlessV1, "product less"],
        [Bundles.prepaidV1, "prepaid"],
        [Bundles.depositV1, "deposit"],
        [Bundles.kycV1, "kyc"],
        [Bundles.creditCardV1, "credit card"],
        [Bundles.ulocMvp1, "uloc"],
    ]);

    bundleOptions() {
         var options: {value: string, label: string} []
         options = []
         
         Bundles.Bundles.forEach(bundleKey => {
            let label = this.bundleLabels.get(bundleKey)
            if (label !== undefined) {
                var option = {value: bundleKey, label: label}
                options.push(option)
            }
         })

        return options
    }

    handleBundleChange = (bundleSelectedOption: any) => {
        console.log(`Option selected:`, bundleSelectedOption);
        this.setState({ bundleSelected: bundleSelectedOption.value });
    };

    render() {
        return (
            <div className="container">
                <h1>Onboarding self service</h1>

                <div className="onboarding-infos-container">
                Product bundle:
                    <Select className="select" onChange={this.handleBundleChange} options={this.bundleOptions()} />

                    <OnboardingForm bundle={this.state.bundleSelected} />

                    <button>Create product</button>
                </div>
                <div className="onboarding-process-container">
                    <OnboardingProcess />
                </div>
            </div>
        );
      }
}