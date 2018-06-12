import React, { Component } from 'react';
import UserItem from './UserItem';
import Paginator from './Paginator';
import { fetchUsers } from './utils/devPortalApi';

export default class UserList extends Component {
    constructor (props) {
        super(props);

        this.state = {
            users: [],
        };

        this.loadUsers = this.loadUsers.bind(this);
    }

    componentDidMount() {
        this.loadUsers();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.appId !== null && this.props.appId !== prevProps.appId){
            this.loadUsers();
        }
    }

    loadUsers() {
        const { appId } = this.props;
        fetchUsers(appId)
            .then(json => {
                if ('users' in json) {
                    this.setState({
                        users: json.users,
                    });
                } else if ('logout' in json && json.logout) {
                    this.props.logoutHandler();
                }
            });
    }

    render () {
        const users = this.state.users.map(user => (
            <div
                key={user.id}
            >
                <UserItem {...user} />
            </div>
        ));
        return (
            <React.Fragment>
                <div className="users-list main-area">
                    {users}
                </div>
                <Paginator />
            </React.Fragment>

        );
    }
}
