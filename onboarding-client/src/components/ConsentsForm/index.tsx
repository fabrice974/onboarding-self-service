import React from "react";
import Select from 'react-select'

export default class ConsentsForm extends React.Component {
    
    consentTypes = [ 
        {value: "CONSENT_TYPE_PRIVACY_TERMS", label: "Privacy Terms"},
    ]

    render() {
        return (
            <div>
                <div> Consents Info: </div>
                <div>
                    <Select className="select" options={this.consentTypes} />
                    <input type="text" name="documentNameAndVersion" defaultValue="https://finaptic.com/" placeholder="document name and version" />
                </div>
            </div>
        );
      }
}