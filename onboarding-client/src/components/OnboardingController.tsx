import React from 'react'
import OnboardingView from './OnboardingView'

export class OnboardingController extends React.Component <any, any> {
    createProduct = (form: any) => {
        this.props.viewModel.createProduct(form)
    }

    render() {
        return (
            <OnboardingView createProduct={this.createProduct}
                onboardingFlow={this.props.viewModel.getOnboardingFlow()} />
        )
    }
}