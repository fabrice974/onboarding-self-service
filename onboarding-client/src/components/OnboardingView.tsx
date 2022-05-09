import React from "react";
import Select from 'react-select'
import OnboardingForm from "./Views/OnboardingForm";
import OnboardingProcess from "./Views/OnboardingProcess";
import { Bundles } from '../models/Onboarding/domain/Bundles'

export default class OnboardingView extends React.Component <any, any> {

    bundleLabels = new Map<string, string>([
        [Bundles.productlessV1, "product less"],
        [Bundles.prepaidV1, "prepaid"],
        [Bundles.depositV1, "deposit"],
        [Bundles.kycV1, "kyc"],
        [Bundles.creditCardV1, "credit card"],
        [Bundles.ulocMvp1, "uloc"],
    ]);

    allBundles = () => {
        let options: {value: string, label: string} []
        options = []

        let bundles: string[]
        console.log(this.props.allBundles)
        bundles = this.props.allBundles
        bundles.forEach(bundleKey => {
           let label = this.bundleLabels.get(bundleKey)
           if (label !== undefined) {
               var option = {value: bundleKey, label: label}
               options.push(option)
           }
        })

       return options
    }

    render() {
        const {
            onBundleSelected,
            bundleSelected,
            createProduct
        } = this.props

        return (
            <div className="container">
                <h1>Onboarding self service</h1>

                <div className="onboarding-infos-container">
                Product bundle:
                    <Select className="select" onChange={onBundleSelected} options={this.allBundles()} />

                    <OnboardingForm bundle={bundleSelected} />

                    <button onClick={createProduct}>Create product</button>
                </div>
                <div className="onboarding-process-container">
                    <OnboardingProcess />
                </div>
            </div>
        );
      }
}