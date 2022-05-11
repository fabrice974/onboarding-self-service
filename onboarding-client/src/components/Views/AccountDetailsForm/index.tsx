import Select from 'react-select'
import { AccountPurposesEnum, SourceOfFundsEnum } from '../../../models/Onboarding/domain/AccountDetails'
import { Controller } from "react-hook-form";

export default function AccountDetailsForm(props: any) {
        return (
            <div>
                <div> Account Details Info: </div>
                <div>

                <Controller
                        name="accountDetails.accountPurpose"
                        control={props.control}
                        render={({ field }) => 
                            <Select className="select"
                            {...props.register('accountDetails.accountPurpose', {
                                required: true
                            })}
                            {...field}
                            options={[
                                { value: AccountPurposesEnum.everyDayTransactions, label: "Every day transactions" },
                                ]}
                        />}
                    />

                    <Controller
                        name="accountDetails.sourceOfFund"
                        control={props.control}
                        render={({ field }) => 
                            <Select className="select"
                            {...props.register('accountDetails.sourceOfFund', {
                                required: true
                            })}
                            {...field}
                            options={[
                                { value: SourceOfFundsEnum.salaryOrSelfEmployment, label: "Salary or Self employment income" },
                                ]}
                        />}
                    />
                    
                    Authorized third party usage:
                    <input type="checkbox"
                        {...props.register('accountDetails.authorizedThirdPartyUsage')}
                        defaultChecked="true" />
                </div>
            </div>
        );
}