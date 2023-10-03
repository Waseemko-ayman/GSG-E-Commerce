import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const currencysSlice = createSlice({
  name: "currencys",
  initialState: {
    currencys: [],
    isLoading: false,
    errorMessage: "",
  },
  reducers: {
    setLoading: (state, { payload = true }) => {
      state.isLoading = payload;
    },

    getAllCurrencys: (state, action) => {
      state.currencys = action.payload;
      state.isLoading = false;
      state.errorMessage = "";
    },

    setError: (state, action) => {
      state.errorMessage = action.payload;
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
const {
  getAllCurrencys,
  setLoading,
  setError,
} = currencysSlice.actions;


// -----------------------------------------------------------------------
// ------------------------------ Actions --------------------------------
// -----------------------------------------------------------------------

export const getCurrencys = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get("http://localhost:3003/currencys");
    console.log(data);
    dispatch(getAllCurrencys(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default currencysSlice.reducer;