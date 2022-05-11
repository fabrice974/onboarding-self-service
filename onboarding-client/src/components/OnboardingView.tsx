import React from "react";
import Select from 'react-select'
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import OnboardingForm from "./Views/OnboardingForm";
import OnboardingProcessView from './Views/OnboardingProcessView';
import { BundlesEnum } from '../models/Onboarding/domain/Bundles'
import { IOnboardingInput } from '../models/Onboarding/domain/OnboardingInput'
import { useState } from 'react';

export default function OnboardingView(props: any) {
        const { control, register, handleSubmit, watch } = useForm<IOnboardingInput>();
        const onSubmit: SubmitHandler<IOnboardingInput> = data => {
            return props.createProduct(data);
        }
        const [bundleSelected, setBundleSelected] = useState("")

        React.useEffect(() => {
            const subscription = watch((value, { name, type }) => {
                    var bundleId: string
                    if (value.bundleId !== undefined && value.bundleId.value) {
                        bundleId = value.bundleId.value
                        setBundleSelected(bundleId)
                    }
                }
            );
            return () => subscription.unsubscribe();
          }, [watch]);

        return (
            <div className="container">
                <h1>Onboarding self service</h1>

                <div className="onboarding-infos-container">
                    Product bundle:
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="bundleId"
                        control={control}
                        render={({ field }) => 
                            <Select className="select"
                            {...register('bundleId', {
                                required: true
                            })}
                            {...field}
                            options={[
                                { value: BundlesEnum.creditCardV1, label: "credit card V1" },
                                { value: BundlesEnum.depositV1, label: "deposit V1" },
                                { value: BundlesEnum.kycV1, label: "KYC V1" },
                                { value: BundlesEnum.prepaidV1, label: "prepaid V1" },
                                { value: BundlesEnum.productlessV1, label: "productless V1" },
                                { value: BundlesEnum.ulocMvp1, label: "uloc mvp 1" },
                              ]}
                        />}
                    />

                        <OnboardingForm bundleSelected={bundleSelected} control={control} register={register} />

                        <input type="submit" placeholder="create product" />
                    </form>
                </div>
                <div className="onboarding-process-container">
                    <OnboardingProcessView onboardingFlow={props.onboardingFlow} />
                </div>
            </div>
        );
    }