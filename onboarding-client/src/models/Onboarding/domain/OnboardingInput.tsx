export interface IOnboardingInput {
    bundleId: LabelValue
    isExistingCustomer: boolean
    authenticationInput: AuthenticationInput
    customerInfo: CustomerInfoInput
    employmentsInfo: EmploymentInput
    customerAddress: CustomerAddressInput
    accountDetails: AccountDetailsInput
    consents: ConsentsInput
}

export interface AuthenticationInput {
    username: string
    password: string
    email: string
}

export interface CustomerInfoInput {
    email: string
    phoneNumber: string
    firstName: string
    lastName: string
    middleName: string
    alias: string
    birthDate: string
}

export interface EmploymentInput {
    status: LabelValue
    industry: string
    address: AddressInput
}

export interface CustomerAddressInput {
    isCanadianResident: boolean
    citizenship: LabelValue
    sinToken: string
    address: AddressInput
}

export interface AddressInput {
    line1: string
    line2: string
    locality: string
    area: string
    postalCode: string
    country: string
}

export interface AccountDetailsInput{
    accountPurpose: LabelValue
    sourceOfFund: LabelValue
    authorizedThirdPartyUsage: boolean
}

export interface ConsentsInput{
    type: string
    documentNameAndVersion: string
}

interface LabelValue{
    value: string
    label: string
}