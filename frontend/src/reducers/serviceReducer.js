import {
    SERVICE_LIST_REQUEST,
    SERVICE_LIST_SUCCESS,
    SERVICE_LIST_FAIL,
    SERVICE_DETAIL_REQUEST,
    SERVICE_DETAIL_SUCCESS,
    SERVICE_DETAIL_FAIL
} from '../constants/serviceConstants'

export const serviceListReducer = (state = { services: [] }, action) => {
    switch (action.type) {
        case SERVICE_LIST_REQUEST:
            return { loading: true, services: [] }

        case SERVICE_LIST_SUCCESS:
            return { loading: false, services: action.payload }

        case SERVICE_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const serviceDetailReducer = (state = { service: {} }, action) => {
    switch (action.type) {
        case SERVICE_DETAIL_REQUEST:
            return { loading: true, ...state }

        case SERVICE_DETAIL_SUCCESS:
            return { loading: false, service: action.payload }

        case SERVICE_DETAIL_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
