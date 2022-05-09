import React from 'react'
import OnboardingView from './OnboardingView'

export class OnboardingController extends React.Component <any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            bundleSelected: null
        }
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
                allBundles={this.props.viewModel.getAllBundles()}
                onBundleSelected={this.setBundle}
                bundleSelected={this.state.bundleSelected}
                createProduct={this.createProduct} />
        )
    }
}