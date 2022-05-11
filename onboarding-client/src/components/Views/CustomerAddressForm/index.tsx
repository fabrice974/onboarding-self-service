import Select from 'react-select'
import AddressForm from "../AddressForm";
import { Controller } from "react-hook-form";
import { CountriesEnum } from '../../../models/Onboarding/domain/Countries'
import { v4 as uuid } from 'uuid';

export default function CustomerAddressForm(props: any) {
    let sinToken = uuid()
        return (
            <div>
                <div> Customer Address Info: </div>
                <div>
                    Canadian resident:
                    <input type="checkbox"
                        {...props.register('customerAddress.isCanadianResident')}
                        defaultChecked="true" />
                    <input type="text"
                        {...props.register('customerAddress.sinToken', {
                            required: true
                        })}
                        defaultValue={sinToken}
                        placeholder="sin token" />
                    <Controller
                        name="customerAddress.citizenship"
                        control={props.control}
                        render={({ field }) => 
                            <Select className="select"
                            {...props.register('customerAddress.citizenship', {
                                required: true
                            })}
                            {...field}
                            options={[
                                { value: CountriesEnum.canada, label: "Canada" },
                            ]}
                        />}
                    />

                    <AddressForm registerName="customerAddress" register={props.register} />
                </div>
            </div>
        );
}