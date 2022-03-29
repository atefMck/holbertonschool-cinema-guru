import React, { Fragment } from 'react';
import Input from '../../components/general/Input'
import { faKey, faEnvelope, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import SubmitInput from '../../components/general/SubmitButton'

const Register = ({ password, setPassword, username, setUsername }) => {
    return (
        <Fragment>
            <h1 className="authentication-header">Create a new account</h1>
            <Input type="text" icon={faUser} label="Username" value={username} setValue={setUsername} />
            <Input type="password" icon={faKey} label="Password" value={password} setValue={setPassword} />
            <SubmitInput label="Sign Up" icon={faPlus} />
        </Fragment>
    );
}

export default Register;
