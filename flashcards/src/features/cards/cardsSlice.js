import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: {}
};

export const cardsSlice = createSlice({
    name: "cards",
    initialState: initialState,
    reducers: {
        addCard: (state, action) => {
            state.cards[action.payload.id] = action.payload;
        }
    }
});

export const selectCards = state => state.cards.cards;
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;