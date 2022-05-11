import Select from 'react-select'
import AddressForm from "../AddressForm";
import { EmploymentsEnum } from '../../../models/Onboarding/domain/Employments'
import { Controller } from "react-hook-form";

export default function EmploymentInfoForm (props: any) {
    let employmentData = [
            { value: EmploymentsEnum.employed, label: "employed" },
            { value: EmploymentsEnum.unemployed, label: "unemployed" },
            { value: EmploymentsEnum.retired, label: "retired" },
        ]
        return (
            <div>
                <div> Employment Info: </div>
                <div>
                    <Controller
                        name="employmentsInfo.status"
                        control={props.control}
                        render={({ field }) => 
                            <Select className="select"
                            {...props.register('employmentsInfo.status', {
                                required: true
                            })}
                            {...field}
                            options={employmentData}
                        />}
                    />

                    <AddressForm registerName="employmentsInfo" register={props.register} />

                    <input type="text"
                        {...props.register('employmentsInfo.industry', {
                            required: true
                        })}
                        name="industry"
                        defaultValue="111110"
                        placeholder="industry" />
                </div>
            </div>
        )
}