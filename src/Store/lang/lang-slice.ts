import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Lang = {
  lang: string;
};

const initialState: Lang = {
  lang: "en",
};

const lengSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = lengSlice.actions;
export default lengSlice.reducer;
