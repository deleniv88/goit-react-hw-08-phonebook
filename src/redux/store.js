import { configureStore } from "@reduxjs/toolkit";
import {clickReducer} from './contactsSlice';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';

export const store = configureStore({
    reducer:{
        contacts: clickReducer
    },
    middleware(getDefaultMiddleware){
        return getDefaultMiddleware({
            serializableCheck:{
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
    }
})

export const persistor = persistStore(store)
