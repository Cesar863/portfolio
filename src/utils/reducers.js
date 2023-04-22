import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
    showAll: false
}

export const setShowAll = createAction('setShowAll');

const reducers = createReducer(initialState, (builder) => {
    builder
        .addCase(setShowAll, (state, action) => {
            state.showAll = action.payload;
        })
})

export default reducers