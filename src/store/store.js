import { configureStore } from '@reduxjs/toolkit';

import AppState from './AppState';

export default configureStore({
    reducer: {
        AppState: AppState
    }
});