import React from 'react'
import { OnboardingStore } from '../models/Onboarding/OnboardingStore'
import { OnboardingController } from './OnboardingController'
import { OnboardingProcessViewModel } from './OnboardingProcessViewModel'

export class OnboardingProvider extends React.Component <any, any> {
    viewModel: OnboardingProcessViewModel
    
    constructor(props : any) {
        super(props)
        let onboardingStore = new OnboardingStore()
        this.viewModel = new OnboardingProcessViewModel(onboardingStore)
    }

    render() {
        return (
            <OnboardingController viewModel={this.viewModel} />
        )
    }
}