import { createSlice } from '@reduxjs/toolkit';

export const AppState = createSlice({
    name: 'appstate',
    initialState: {
        showMobileMenu: false,
    },
    reducers: {
        setShowMobileMenu: (state, action) => {
            state.showMobileMenu = !state.showMobileMenu;
        }
    },
});

export const { setShowMobileMenu } = AppState.actions;

export default AppState.reducer;