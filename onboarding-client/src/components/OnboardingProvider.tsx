import React from 'react'
import { OnboardingStore } from '../models/Onboarding/OnboardingStore'
import { OnboardingController } from './OnboardingController'
import { OnboardingViewModel } from './OnboardingViewModel'

export class OnboardingProvider extends React.Component <any, any> {
    viewModel: OnboardingViewModel
    
    constructor(props : any) {
        super(props)
        let onboardingStore = new OnboardingStore()
        this.viewModel = new OnboardingViewModel(onboardingStore)
    }

    render() {
        return (
            <OnboardingController viewModel={this.viewModel} />
        )
    }
}