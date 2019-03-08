import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const LoginPage = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <h1>LOGIN</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    props.login({ username, password })
                    .then(() => {
                        props.history.push('/friendslist');
                    })
                    setUsername('');
                    setPassword('');
                }}>
                    <input
                        type="text"
                        placeholder="username"
                        onChange = {e => setUsername(e.target.value)}
                        name="username"
                        value={username}
                    />
                    <input
                        type="text"
                        placeholder="password"
                        onChange = {e => setPassword(e.target.value)}
                        name="password"
                        value={password}
                    />
                    <button type="submit">Login</button>
                </form>
        </div>
    )
}

export default withRouter(LoginPage);