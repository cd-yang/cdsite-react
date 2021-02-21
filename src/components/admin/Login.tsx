import React, { useState } from 'react';//, useEffect
import { Button } from 'antd';
// import { Link } from 'react-router-dom'

//redux stuff
import { connect } from 'react-redux';
import { loginUser, userDataProps } from './redux/actions/userActions'

function Login(props: any) {
    const [values, setValues] = useState({
        email: '',
        password: ''
    } as userDataProps);

    // const [errors, setErrors] = useState({});// as formError
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     if (props.UI.errors) {
    //         setErrors(props.UI.errors);
    //     }
    //     setLoading(props.UI.loading);
    // }, [props.UI])

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // setLoading(true);
        //your client side validation here
        //after success validation
        const userData = {
            email: values.email,
            password: values.password,
        };
        props.loginUser(userData, props.history);
    }
    const handleChange = (e: any) => {
        e.persist();
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    };
    return (
        <div>
            <div>SIGN IN</div>
            <div>
                <input
                    value={values.email}
                    id='email'
                    name='email'
                    type='email'
                    onChange={handleChange}
                />
                <input
                    value={values.password}
                    name='password'
                    type='password'
                    onChange={handleChange}
                />
                <Button onClick={handleSubmit}>Login</Button>
            </div>
        </div>
    )
}

//this map the states to our props in this functional component
const mapStateToProps = (state: any) => ({
    user: state.user,
    UI: state.UI
});

//this map actions to our props in this functional component
const mapActionsToProps = {
    loginUser: loginUser
};

export default connect(mapStateToProps, mapActionsToProps)(Login)