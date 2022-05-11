export default function CustomerInfoForm(props: any) {
        return (
            <div>
                <div> Customer Info: </div>
                <div>
                    <input type="customerInfo.email"
                    {...props.register('email', {
                        required: true,
                        pattern:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                    defaultValue="bob@example.com"
                    name="email" />
                    <input type="tel"
                    {...props.register('customerInfo.phoneNumber', {
                        required: true
                    })}
                    defaultValue="+15141234567"
                    placeholder="phone number" />
                    <input type="text"
                    {...props.register('customerInfo.firstName', {
                        required: true
                    })}
                    name="firstname"
                    defaultValue="COMPANY"
                    placeholder="first name" />
                    <input type="text"
                    {...props.register('customerInfo.lastName', {
                        required: true
                    })}
                    name="lastname"
                    defaultValue="SAMPLE"
                    placeholder="last name" />
                    <input type="text"
                    {...props.register('customerInfo.middleName')}
                    name="middlename"
                    defaultValue=""
                    placeholder="middle name" />
                    <input type="text"
                    {...props.register('customerInfo.alias')}
                    name="alias"
                    defaultValue=""
                    placeholder="alias" />
                    <input type="date"
                    {...props.register('customerInfo.birthDate', {
                        required: true
                    })}
                    name="birthdate"
                    defaultValue="2000-03-06" />
                </div>
            </div>
        );
      }