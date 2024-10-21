import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  folders: [],
  error: null,
  loading: false,
};

export const fetchFolders = createAsyncThunk(
  "folders/fetchFolders",
  async () => {
    const repsonse = await fetch(
      "http://localhost:3001/api/supabase/get-folders"
    );
    const data = await repsonse.json();
    return data?.folders;
  }
);

export const foldersSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    addFolder: (state, action) => {
      state.folders.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchFolders.fulfilled, (state, action) => {
      state.folders = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchFolders.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchFolders.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = null;
    });
  },
});

// Action creators are generated for each case reducer function
export const { addFolder } = foldersSlice.actions;

export default foldersSlice.reducer;
