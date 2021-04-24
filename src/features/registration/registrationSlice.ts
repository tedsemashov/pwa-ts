import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface RegistrationState {
    info: string
}

const initialState: RegistrationState = {
    info: 'ode beauty space',
};

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setNewInfo: (state, action: PayloadAction<string>) => { state.info = action.payload },
    }
})

export const { setNewInfo } = registrationSlice.actions;

export const getRegistrationInfo = (state: RootState) => state.registerInfo.info;

export default registrationSlice.reducer;
