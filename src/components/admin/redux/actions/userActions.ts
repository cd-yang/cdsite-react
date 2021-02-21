import { SET_USER, LOADING_UI, CLEAR_ERRORS, SET_UNAUTHENTICATED, LOADING_USER } from '../types';//, SET_ERRORS
import axios from 'axios';

export type userDataProps = {
    email: ''
    password: ''
}

export const loginUser = (userData: userDataProps, history: any) => (dispatch: any) => {
    dispatch({ type: LOADING_UI })

    //测试
    localStorage.setItem('token', `Bearer ${testToken}`);//setting token to local storage
    axios.defaults.headers.common['Authorization'] = testToken;//setting authorize token to header in axios
    dispatch(getUserData());
    dispatch({ type: CLEAR_ERRORS });
    console.log('success');
    history.push('/admin');//redirecting to index page after login success

    // axios.post('login', userData)
    //     .then((res) => {
    //         const token = `Bearer ${res.data.token}`;
    //         localStorage.setItem('token', `Bearer ${res.data.token}`);//setting token to local storage
    //         axios.defaults.headers.common['Authorization'] = token;//setting authorize token to header in axios
    //         dispatch(getUserData());
    //         dispatch({ type: CLEAR_ERRORS });
    //         console.log('success');
    //         history.push('/');//redirecting to index page after login success
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         dispatch({
    //             type: SET_ERRORS,
    //             payload: err.response.data
    //         });
    //     });
}

export const logoutUser = () => (dispatch: any) => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization']
    dispatch({
        type: SET_UNAUTHENTICATED
    });
    window.location.href = '/admin/login';//redirect to login page
};

//for fetching authenticated user information
export const getUserData = () => (dispatch: any) => {
    dispatch({ type: LOADING_USER });

    //测试已登录
    dispatch({
        type: SET_USER,
        payload: testResponse
    });

    // axios.get('/user')
    //     .then(res => {
    //         console.log('user data', res.data);
    //         dispatch({
    //             type: SET_USER,
    //             payload: res.data
    //         });
    //     }).catch(err => {
    //         console.log(err);
    //     });
}

const testResponse = {
    'credentials': {
        'createdAt': '2020–01–30T10:29:44.898Z',
        'email': 'bikash@gmail.com',
        'userId': 'D4hCBB4RcAdTjawNCQ0K4ItED563'
    }
};

const testToken = {
    "token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1OTc0MmQyNjlhY2IzNWZiNjU3YzBjNGRkMmM3YjcyYWEzMTRiNTAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGFya2l0LTI3YTQ4IiwiYXVkIjoicGFya2l0LTI3YTQ4IiwiYXV0aF90aW1lIjoxNTgwNjM3MzgyLCJ1c2VyX2lkIjoiRDRoQ0JCNFJjQWRUamF3TkNRMEs0SXRFRDU2MyIsInN1YiI6IkQ0aENCQjRSY0FkVGphd05DUTBLNEl0RUQ1NjMiLCJpYXQiOjE1ODA2MzczODIsImV4cCI6MTU4MDY0MDk4MiwiZW1haWwiOiJwYWRhbTEyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJwYWRhbTEyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.M0hTKqNb_0_3qmqS7xiI2I3mDpm6_gaAEIzRBydiu89pzaBJPXZ1BngdLQeJ2_JOh6GJBHDDeX52yM-DZdHoK6cC93ugqMjz7bzegf5YJzdYEtBPHFKvaDUQEgzgGhGbU_jl5xL09uIixPgOChw3zWbVAbvj4ZjJrT4u5aC96txhDA9gMPtRLq-9VoL4SQTRjOc-_vP08SylWP1oklMgsCfEGFCk81zcEsGEHfHwH_dIcj208G483lzD29Ghqmo3nKGp6u3eeXLxoyop8hKQsJUbvJK9zZmobfqZfghuDgiMj5_LqImmTeQR6jw7_S1NK0uDMcQl3G0lxezvS0n53w"
};