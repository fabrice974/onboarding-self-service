import { OnboardingStore } from '../models/Onboarding/OnboardingStore'

export class OnboardingViewModel {
    onboardingStore: OnboardingStore

    constructor(onboardingStore: OnboardingStore) {
        this.onboardingStore = onboardingStore
    }

    getAllBundles() {
        return this.onboardingStore.GetAllBundles()
    }

    createProduct(data: any) {
        console.log("create product from view model:", data)
    }
}