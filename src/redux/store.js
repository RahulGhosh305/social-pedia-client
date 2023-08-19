import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './services/auth/authApi.js';
import { socialApi } from './services/social/socialApi.js';
// import { socialApi } from './services/social/socialApi.js';


const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [socialApi.reducerPath]: socialApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            socialApi.middleware
        ),
});

export default store;