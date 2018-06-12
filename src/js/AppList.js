import React, { Component } from 'react';
import AppItem from './AppItem';
import UserList from './UserList';
import { fetchApps } from './utils/devPortalApi';

export default class AppList extends Component {
    constructor (props) {
        super(props);

        this.state = {
            apps: [],
            selectedApp: null,
            appUsers: [],
        };

        this.itemSelectHandler = this.itemSelectHandler.bind(this);
    }

    componentDidMount() {
        fetchApps()
            .then(json => {
                console.log(json);
                if ('apps' in json) {
                    this.setState({
                        apps: json.apps,
                    });
                } else if ('logout' in json && json.logout) {
                    this.props.logoutHandler();
                }
            });
    }

    itemSelectHandler(appId) {
        if (this.state.selectedApp === appId) {
            this.setState({
                selectedApp: null,
            });
        } else {
            this.setState({
                selectedApp: appId,
            });
        }
    }

    render () {
        const apps = this.state.apps.map(app => (
            <li
                key={app.id}
                onClick={() => this.itemSelectHandler(app.id)}
            >
                <AppItem
                    {...app}
                    selected={this.state.selectedApp === app.id}
                />
            </li>
        ))

        const layoutClass = this.state.selectedApp !== null ?
            ' side-bar' : ' centered-wide';
        return (
            <React.Fragment>
                <ul className={`apps-list${layoutClass}`}>
                    {apps}
                </ul>
                {this.state.selectedApp !== null &&
                    <UserList
                        appId={this.state.selectedApp}
                        logoutHandler={this.props.logoutHandler}
                    />
                }
            </React.Fragment>
        );
    }
}
