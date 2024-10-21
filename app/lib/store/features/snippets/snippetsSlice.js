import { snippets } from "@/data/dummy";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  snippets: snippets || [],
};
export const snippetsSlice = createSlice({
  name: "snippet",
  initialState,
  reducers: {
    addSnippet: (state, action) => {
      // Magic
      // Immer will handle the mutation
      state.snippets.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSnippet } = snippetsSlice.actions;

export default snippetsSlice.reducer;
