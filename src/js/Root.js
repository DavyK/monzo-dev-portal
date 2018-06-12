import React, { Component } from 'react';
import { login, isLoggedIn } from './utils/devPortalApi';
import Login from './Login';
import AppList from './AppList';

export default class DevPortal extends Component {
    constructor (props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            authenticated: isLoggedIn(),
        };

        this.loginChangeHandler = this.loginChangeHandler.bind(this);
        this.loginSubmitHandler = this.loginSubmitHandler.bind(this);
        this.logoutHandler = this.logoutHandler.bind(this);
    }

    loginChangeHandler(field, value) {
        this.setState({
            [field]: value,
        });
    }

    logoutHandler() {
        this.setState({
            authenticated: false,
        });
    }

    loginSubmitHandler(event) {
        event.preventDefault();
        const { username, password } = this.state;
        login(username, password)
            .then(() => this.setState({
                authenticated: isLoggedIn(),
            }));
    }

    render () {
        if (!this.state.authenticated) {
            return (
                <Login
                    username={this.state.username}
                    password={this.state.password}
                    changeHandler={this.loginChangeHandler}
                    submitHandler={this.loginSubmitHandler}
                />
            );
        } else {
            return(
                <AppList logoutHandler={this.logoutHandler}  />
            );
        }
    }
}
