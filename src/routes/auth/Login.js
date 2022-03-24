import React, { Fragment } from 'react';
import Input from '../../components/general/Input'
import { faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import SubmitInput from '../../components/general/SubmitButton'

const Login = () => {
    return (
        <Fragment>
            <h1 className="authentication-header">Sign in with your account</h1>
            <Input type="email" icon={faEnvelope} label="Email" />
            <Input type="password" icon={faKey} label="Password" />
            <SubmitInput label="Sign In" icon={faKey} />
        </Fragment>
    );
}

export default Login;
