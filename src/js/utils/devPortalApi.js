import Cookies from 'js-cookie'

const BASE_URL = 'https://guarded-thicket-22918.herokuapp.com'

export const isLoggedIn = () => {
    if (typeof Cookies.get('accessToken') !== 'undefined') {
        return true;
    } else {
        return false;
    }
}

const responseHandler = (response) => {
    /*
    ** helper function to process the response of fetch requests
    */
    const { status, statusText } = response;
    if (status === 401) {
        return { logout: true };
    } else if (status >= 200 && status < 300) {
        return response.json();
    } else {
        throw new Error(`${status}: ${statusText}`);
    }
}


export const login = (username, password) => {
    return fetch(`${BASE_URL}/login`,
        {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                username,
                password,
            }),
        }
    )
        .then(responseHandler)
        .then(json => {
            if ('accessToken' in json){
                Cookies.set('accessToken', json.accessToken);
            }

        });
};

export const fetchApps = () => {
    return fetch(`${BASE_URL}/apps`,
        {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': Cookies.get('accessToken'),
            }),
        }
    )
        .then(responseHandler)
}

export const fetchUsers = (appId) => {
    return fetch(`${BASE_URL}/apps/${appId}/users`,
        {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': Cookies.get('accessToken'),
            }),
        }
    )
        .then(responseHandler)
}
