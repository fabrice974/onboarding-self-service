import { Bundles } from "./domain/Bundles"

export class OnboardingStore{

    GetAllBundles() :string[] {
        return [ Bundles.productlessV1, Bundles.ulocMvp1, Bundles.depositV1, Bundles.kycV1, Bundles.creditCardV1 ]
    }
}