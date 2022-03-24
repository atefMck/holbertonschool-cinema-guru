import React, { Fragment } from 'react';
import Input from '../../components/general/Input'
import { faKey, faEnvelope, faPlus } from '@fortawesome/free-solid-svg-icons'
import SubmitInput from '../../components/general/SubmitButton'

const Register = () => {
    return (
        <Fragment>
            <h1 className="authentication-header">Create a new account</h1>
            <Input type="email" icon={faEnvelope} label="Email" />
            <Input type="email" icon={faEnvelope} label="Confirm Email" />
            <Input type="password" icon={faKey} label="Password" />
            <Input type="password" icon={faKey} label="Confirm Password" />
            <SubmitInput label="Sign Up" icon={faPlus} />
        </Fragment>
    );
}

export default Register;
