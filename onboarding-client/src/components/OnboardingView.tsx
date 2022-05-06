import React from "react";
import Select from 'react-select'
import OnboardingForm from "./Views/OnboardingForm";
import OnboardingProcess from "./Views/OnboardingProcess";

export default class OnboardingView extends React.Component <any, any> {
    render() {
        const {
            allBundles,
            onBundleSelected,
            bundleSelected,
            createProduct
        } = this.props

        return (
            <div className="container">
                <h1>Onboarding self service</h1>

                <div className="onboarding-infos-container">
                Product bundle:
                    <Select className="select" onChange={onBundleSelected} options={allBundles} />

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