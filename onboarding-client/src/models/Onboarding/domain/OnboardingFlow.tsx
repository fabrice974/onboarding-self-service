import { makeObservable, observable, action } from "mobx"
import OnboardingStep from "./OnboardingStep"

export default class OnboardingFlow {
    onboardingSteps: OnboardingStep[]

    constructor() {
        makeObservable(this, {
            onboardingSteps: observable,
            addStep: action,
        })
        this.onboardingSteps = []
    }

    addStep(step: OnboardingStep){
        this.onboardingSteps.push(step)
    }
}