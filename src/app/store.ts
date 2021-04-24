import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import registrationReducer from '../features/registration/registrationSlice';

export const store = configureStore({
    reducer: {
        registerInfo: registrationReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
