import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInput: "",
  errors: 0,
  startTime: null,
  wpm: 0,
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
};

export const typingSlice = createSlice({
  name: "typing",
  initialState,
  reducers: {
    setUserInput: (state, action) => {
      state.userInput = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    setStartTime: (state, action) => {
      state.startTime = action.payload;
    },
    setWpm: (state, action) => {
      state.wpm = action.payload;
    },
    resetExercise: (state) => {
      state.userInput = "";
      state.errors = 0;
      state.wpm = 0;
      state.startTime = Date.now();
    },
  },
});

export const { setUserInput, setErrors, setStartTime, setWpm, resetExercise } =
  typingSlice.actions;

export default typingSlice.reducer;
