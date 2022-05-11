import { observer } from "mobx-react-lite"
import OnboardingStep from "../../../models/Onboarding/domain/OnboardingStep"

class props {
    onboardingStep: OnboardingStep
    constructor(onboardingStep: OnboardingStep) {
        this.onboardingStep = onboardingStep
    }
}

export const OnboardingStepView = observer((props: props) => (       
    <div className="onboarding-step">
        {props.onboardingStep.stepName} <br/>
        {props.onboardingStep.status} <br/>
    </div>
    )
)