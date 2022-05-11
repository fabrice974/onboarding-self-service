import { observer } from "mobx-react-lite"
import OnboardingFlow from "../../../models/Onboarding/domain/OnboardingFlow"
import { OnboardingStepView } from "../OnboardingStepView"

class props {
    onboardingFlow: OnboardingFlow
    constructor(onboardingFlow: OnboardingFlow) {
        this.onboardingFlow = onboardingFlow
    }
}

const OnboardingProcessView = observer((props: props) => (       
        <div>
            {
                props.onboardingFlow.onboardingSteps.map(onboardingStep => {
                       return <OnboardingStepView key={onboardingStep.stepName}  onboardingStep={onboardingStep} />
                    }
                )
            }
        </div>
    )
)

export default OnboardingProcessView