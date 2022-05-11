import { OnboardingStore } from '../models/Onboarding/OnboardingStore'
import { IOnboardingInput } from '../models/Onboarding/domain/OnboardingInput'

export class OnboardingProcessViewModel {
    onboardingStore: OnboardingStore

    constructor(onboardingStore: OnboardingStore) {
        this.onboardingStore = onboardingStore
    }

    getOnboardingFlow() {
        return this.onboardingStore.GetOnboardingFlow()
    }

    async createProduct(data: IOnboardingInput) {
        console.log("create product from view model:", data)

        let step = this.onboardingStore.AddStep("initiate application")

        await this.delay(1000);
        step.reportStatus("in progress")
    }

    delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
}