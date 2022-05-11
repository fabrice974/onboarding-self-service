import CustomerInfoForm from "../CustomerInfoForm";

export default function productlessV1Form(props: any) {
        return (
            <div>
                <CustomerInfoForm register={props.register} />
            </div>
        );
}