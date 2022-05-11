import Select from 'react-select'
import { ConsentTypesEnum } from '../../../models/Onboarding/domain/Consents'
import { Controller } from "react-hook-form";

export default function ConsentsForm(props: any) {
        return (
            <div>
                <div> Consents Info: </div>
                <div>
                <Controller
                        name="consents.type"
                        control={props.control}
                        render={({ field }) => 
                            <Select className="select"
                            {...props.register('consents.type', {
                                required: true
                            })}
                            {...field}
                            options={[
                                { value: ConsentTypesEnum.privacyTerms, label: "Privacy Terms" },
                                ]}
                        />}
                    />
                    <input type="text"
                        {...props.register('consents.documentNameAndVersion', {
                            required: true
                        })}
                        name="documentNameAndVersion"
                        defaultValue="https://finaptic.com/"
                        placeholder="document name and version" />
                </div>
            </div>
        );
}