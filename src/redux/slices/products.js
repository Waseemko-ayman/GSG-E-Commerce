import { API_URL } from "@/config/api";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productPagination: [],
    isLoading: false,
    errorMessage: "",
    product: null,
  },
  reducers: {
    setLoading: (state, { payload = true }) => {
      state.isLoading = payload;
    },

    getAllProducts: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
      state.errorMessage = "";
    },

    getSingleProduct: (state, action) => {
      state.product = action.payload;
      state.isLoading = false;
      state.errorMessage = "";
    },

    setError: (state, action) => {
      state.errorMessage = action.payload;
      state.isLoading = false;
    },
  },
});

const {
  setLoading,
  getAllProducts,
  getSingleProduct,
  setError,
} = productsSlice.actions;

// -----------------------------------------------------------------------
// ------------------------------ Actions --------------------------------
// -----------------------------------------------------------------------

export const getProducts = (num=0, size=0) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get(`${API_URL}products?_page=${num}&_limit=${size}`)    
    // const { data } = await axios.get(API_URL + "products");
    console.log(data);
    dispatch(getAllProducts(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const getSingleProductAction = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get(`${API_URL}products/${id}`);
    console.log(data);
    dispatch(getSingleProduct(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default productsSlice.reducer;