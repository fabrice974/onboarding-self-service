import React from "react";

export default class CustomerInfoForm extends React.Component {
    render() {
        return (
            <div>
                <div> Customer Info: </div>
                <div>
                    <input type="email" name="email" defaultValue="bob@example.com" placeholder="email" />
                    <input type="tel" name="phonenumber" defaultValue="+15141234567" placeholder="phone number" />
                    <input type="text" name="firstname" defaultValue="COMPANY" placeholder="first name" />
                    <input type="text" name="lastname" defaultValue="SAMPLE" placeholder="last name" />
                    <input type="text" name="middlename" defaultValue="" placeholder="middle name" />
                    <input type="text" name="alias" defaultValue="" placeholder="alias" />
                    <input type="date" name="birthdate" defaultValue="2000-03-06" />
                </div>
            </div>
        );
      }
}