import { createSlice } from "@reduxjs/toolkit";

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : {}

const firebaseAuth = createSlice({
    name: "firebase",
    initialState: { loading: false, userInfo: { ...userInfoFromStorage } },
    reducers: {
        userLoginRequest(state, action) {
            return { ...state, loading: true };
        },
        userLoginSuccess(state, action){
            localStorage.setItem('userInfo', JSON.stringify({ ...state.userInfo, ...action.payload }));
            return { access: false, userInfo: { ...state.userInfo, ...action.payload },  loading: false }
        },
        userLoginFailure(state, action){
            return { ...state, access: false, loading: false, error: action.payload };
        },
    }
})

export const {
    userLoginRequest,
    userLoginSuccess,
    userLoginFailure,
} = firebaseAuth.actions;

export default firebaseAuth.reducer;