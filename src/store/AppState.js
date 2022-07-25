import { createSlice } from '@reduxjs/toolkit';

export const AppState = createSlice({
    name: 'appstate',
    initialState: {
        showMobileMenu: false,
        searchQuery: '',
    },
    reducers: {
        setShowMobileMenu: (state, action) => {
            state.showMobileMenu = !state.showMobileMenu;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        }
    },
});

export const { setShowMobileMenu, setSearchQuery } = AppState.actions;

export default AppState.reducer;