import React from "react";

export default class UserForm extends React.Component {
    render() {
        return (
            <div>
                <input type="text" name="username" placeholder="username" />
                <input type="password" name="password" placeholder="password" />
                <input type="email" name="email" placeholder="email" />
            </div>
        );
      }
}