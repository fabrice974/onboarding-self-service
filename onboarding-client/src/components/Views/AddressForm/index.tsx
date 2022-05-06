import React from "react";

export default class AddressForm extends React.Component {
    render() {
        return (
            <div>
                <input type="text" name="line1" defaultValue="123 30 Auburn Bay St SE" placeholder="line 1" />
                <input type="text" name="line2" placeholder="line 2" />
                <input type="text" name="locality" defaultValue="Calgary" placeholder="city" />
                <input type="text" name="area" defaultValue="AB" placeholder="state" />
                <input type="text" name="postalCode" defaultValue="T3M 2M5" placeholder="postal code" />
                <input type="text" name="country" defaultValue="CA" placeholder="country" />
            </div>
        );
      }
}