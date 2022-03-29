import React, { Fragment } from 'react';
import Input from '../../components/general/Input'
import { faKey, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import SubmitInput from '../../components/general/SubmitButton'

const Login = ({ username, setUsername, password, setPassword }) => {
    return (
        <Fragment>
            <h1 className="authentication-header">Sign in with your account</h1>
            <Input type="text" icon={faUser} label="Username" value={username} setValue={setUsername} />
            <Input type="password" icon={faKey} label="Password" value={password} setValue={setPassword} />
            <SubmitInput label="Sign In" icon={faKey} />
        </Fragment>
    );
}

export default Login;
