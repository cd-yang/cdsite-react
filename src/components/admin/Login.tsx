import React, { useState } from 'react';//, useEffect
import { Button } from 'antd';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import { Paper, Box } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
// import CircularProgress from '@material-ui/core/CircularProgress';

//redux stuff
import { connect } from 'react-redux';
import { loginUser } from './redux/actions/userActions'

function Login(props: any) {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });//as userDataProps

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
            <div >
                <div >
                    <div>
                        SIGN IN
                    </div>
                </div>
            </div>
            <div>
                <div />
                <div>
                    <div>
                        <div>
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
                                <div>
                                    {/* {errors.message} */}
                                </div>

                                <div>
                                    <div>
                                        <div>Remember me</div>
                                    </div>
                                    <div>
                                        <Link to='#'>
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>
                                <Button onClick={handleSubmit}>
                                    Login
                                </Button>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

//this map the states to our props in this functional component
const mapStateToProps = (state: any) => ({
    user: state.user,
    UI: state.UI
});

//this map actions to our props in this functional component
const mapActionsToProps = {
    loginUser
};

export default connect(mapStateToProps, mapActionsToProps)(Login)