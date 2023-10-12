import { combineReducers, configureStore } from '@reduxjs/toolkit';
import favoritesSlice from './favorites/favorites.slice';
import { recipeApi } from './api/recipeApi';
import {createLogger} from "redux-logger"

const logger = createLogger({
    collapsed: true,
})


const RootReducer = combineReducers({
    favoritesSlice,
    [recipeApi.reducerPath]: recipeApi.reducer
});

export const store = configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(recipeApi.middleware).concat(logger),
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;