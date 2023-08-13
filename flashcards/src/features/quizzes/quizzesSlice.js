import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

const initialState = {
    quizzes: {}
};

export const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: initialState,
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        }
    }
});

export const addAssociatedQuiz = (payload) => {
    return (dispatch) => {
        dispatch(addQuizId({topicId: payload.topicId, quizId: payload.id}));
        dispatch(addQuiz({
            id: payload.id, 
            name: payload.name, 
            topicId: payload.topicId, 
            cardIds: payload.cardIds
        }));
    }
}

export const selectQuizzes = state => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;