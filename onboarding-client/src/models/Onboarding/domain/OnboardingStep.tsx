import { makeObservable, observable, action } from "mobx"

export default class OnboardingStep {
    stepName: string
    status: string
    isError: boolean
    errMessage: string

    constructor(stepName: string) {
        makeObservable(this, {
            stepName: observable,
            status: observable,
            isError: observable,
            errMessage: observable,
            reportStatus: action,
            reportError: action,
        })

        this.stepName = stepName
        this.status = ""
        this.isError = false
        this.errMessage = ""
    }

    reportStatus(status: string){
        this.status = status
    }

    reportError(err: string){
        this.isError = true
        this.errMessage = err
    }
}