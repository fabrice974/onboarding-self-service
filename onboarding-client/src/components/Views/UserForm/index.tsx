import React from "react";

export default class UserForm extends React.Component {
    render() {
        return (
            <div>
                {/* <div>
                    Existing customer:
                    Yes <input type="radio" name="existingUser" value={yes} checked={this.state.isExistingUser === yes} onChange={this.onChangeValue} />
                    No <input type="radio" name="existingUser" value={no} checked={this.state.isExistingUser === no} onChange={this.onChangeValue} />
                </div> */}

                <input type="text" name="username" placeholder="username" />
                <input type="password" name="password" placeholder="password" />
                <input type="email" name="email" placeholder="email" />
            </div>
        );
      }
}