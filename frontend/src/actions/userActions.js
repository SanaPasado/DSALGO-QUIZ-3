import axios from 'axios'
import {
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL
} from '../constants/userConstants'

export const listUsers = (token) => async (dispatch) => {
    try {
        dispatch({ type: USER_LIST_REQUEST })

        const { data } = await axios.get('http://127.0.0.1:8000/api/userlist', {
            headers: { 'Authorization': `Bearer ${token}` }
        })

        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const registerUser = (userData) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST })

        const { data } = await axios.post('http://127.0.0.1:8000/api/users/register', userData)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
