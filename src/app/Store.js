import { configureStore, combineReducers } from "@reduxjs/toolkit"
import todoReducer from "../features/todo/todoSlice"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    todos: todoReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [ 
                    'persist/PERSIST', 
                    'persist/REHYDRATE', 
                    'persist/REGISTER'
                ],
            },
        }),
})

export const persistor = persistStore(store)
export default store

// export const store = configureStore({
//     reducer: todoReducer,

// })