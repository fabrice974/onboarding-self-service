import React from 'react'
import OnboardingView from './OnboardingView'
import { Bundles } from '../models/Onboarding/domain/Bundles'

export class OnboardingController extends React.Component <any, any> {
    constructor(props: any) {
        super(props)
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

    allBundles = () => {
        let options: {value: string, label: string} []
        options = []

        let bundles: string[]
        bundles = this.props.viewmodel.GetAllBundles()
        bundles.forEach(bundleKey => {
           let label = this.bundleLabels.get(bundleKey)
           if (label !== undefined) {
               var option = {value: bundleKey, label: label}
               options.push(option)
           }
        })

       return options
    }

    createProduct = () => {
        this.props.viewModel.createProduct({
            "bundleID": this.state.bundleSelected,
        })
    }

    setBundle = (e: any) => {
        let bundle = e.value
        console.log("bundle selected", bundle)
        this.setState({ bundleSelected: bundle })
    }

    render() {
        return (
            <OnboardingView
                allBundles={this.allBundles}
                onBundleSelected={this.setBundle}
                bundleSelected={this.state.bundleSelected}
                createProduct={this.createProduct} />
        )
    }
}