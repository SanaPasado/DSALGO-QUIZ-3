import axios from 'axios'
import {
    SERVICE_LIST_REQUEST,
    SERVICE_LIST_SUCCESS,
    SERVICE_LIST_FAIL,
    SERVICE_DETAIL_REQUEST,
    SERVICE_DETAIL_SUCCESS,
    SERVICE_DETAIL_FAIL
} from '../constants/serviceConstants'

export const listServices = () => async (dispatch) => {
    try {
        dispatch({ type: SERVICE_LIST_REQUEST })

        const { data } = await axios.get('http://127.0.0.1:8000/api/services')

        dispatch({
            type: SERVICE_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SERVICE_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getServiceDetail = (id) => async (dispatch) => {
    try {
        dispatch({ type: SERVICE_DETAIL_REQUEST })

        const { data } = await axios.get(`http://127.0.0.1:8000/api/services/${id}`)

        dispatch({
            type: SERVICE_DETAIL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SERVICE_DETAIL_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
