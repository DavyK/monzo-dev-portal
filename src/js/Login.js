import React, { Component } from 'react';

export default class Login extends Component {
    render () {
        return (
            <form
                className='login-form centered-slim'
                onSubmit={this.props.submitHandler}
            >
                <label>Username:</label>
                <input
                    name="Username"
                    type="text"
                    value={this.props.username}
                    onChange={(event) => this.props.changeHandler('username', event.target.value)}
                />
                <label>Password:</label>
                <input
                    name="Password"
                    type="Password"
                    value={this.props.password}
                    onChange={(event) => this.props.changeHandler('password', event.target.value)}
                />
                <button
                    className="go"
                    type="submit"
                >
                    Log In
                </button>
            </form>
        )
    }
}
