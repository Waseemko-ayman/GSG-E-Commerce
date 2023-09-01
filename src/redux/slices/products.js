import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
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

    editProduct: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
      state.isLoading = false;
      state.errorMessage = "";
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
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
  editProduct,
  deleteProduct,
  setError,
} = productsSlice.actions;

// -----------------------------------------------------------------------
// ------------------------------ Actions --------------------------------
// -----------------------------------------------------------------------

export const getProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get("#");
    console.log(data);
    dispatch(getAllProducts(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const getSingleProductAction = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get(`#${id}`);
    dispatch(getSingleProduct(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const editProductAction = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.put(`#${data.id}`, data);
    dispatch(editProduct(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const deleteProductAction = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    await axios.delete(`#${id}`);
    dispatch(editProduct(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default productsSlice.reducer;