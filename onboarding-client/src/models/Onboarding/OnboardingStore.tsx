import OnboardingFlow from "./domain/OnboardingFlow"
import OnboardingStep from "./domain/OnboardingStep"

export class OnboardingStore{
    onboardingFlow :OnboardingFlow

    constructor() {
        this.onboardingFlow = new OnboardingFlow()
    }

    GetOnboardingFlow() :OnboardingFlow {
        return this.onboardingFlow
    }

    AddStep(stepName: string) : OnboardingStep {
        let onboardingStep = new OnboardingStep(stepName)
        this.onboardingFlow.addStep(onboardingStep)
        
        return onboardingStep
    }
}