import { configureStore } from '@reduxjs/toolkit'
import { serviceListReducer, serviceDetailReducer } from './reducers/serviceReducer'
import { userListReducer, userRegisterReducer } from './reducers/userReducer'

const reducer = {
    serviceList: serviceListReducer,
    serviceDetail: serviceDetailReducer,
    userList: userListReducer,
    userRegister: userRegisterReducer
}

const initialState = {

}

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState
})

export default store 