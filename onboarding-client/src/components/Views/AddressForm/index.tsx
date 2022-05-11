export default function AddressForm(props: any) {
    return (
        <div>
            <input type="text"
                    {...props.register(props.registerName+'.address.line1', {
                        required: true
                    })}
                    name="line1"
                    defaultValue="123 30 Auburn Bay St SE"
                    placeholder="line 1" />
            <input type="text"
                    {...props.register(props.registerName+'.address.line2')}
                    name="line2"
                    placeholder="line 2" />
            <input type="text"
                    {...props.register(props.registerName+'.address.locality', {
                        required: true
                    })}
                    name="locality"
                    defaultValue="Calgary"
                    placeholder="city" />
            <input type="text"
                    {...props.register(props.registerName+'.address.area', {
                        required: true
                    })}
                    name="area"
                    defaultValue="AB"
                    placeholder="state" />
            <input type="text"
                    {...props.register(props.registerName+'.address.postalCode', {
                        required: true
                    })}
                    name="postalCode"
                    defaultValue="T3M 2M5"
                    placeholder="postal code" />
            <input type="text"
                    {...props.register(props.registerName+'.address.country', {
                        required: true
                    })}
                    name="country"
                    defaultValue="CA"
                    placeholder="country" />
        </div>
    );
}