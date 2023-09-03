import { useReducer } from 'react';
import axios from 'axios';
import { AUTH_ACTIONS } from '@/constants/auth';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const reduce = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case AUTH_ACTIONS.GET: {
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    }
    
    case AUTH_ACTIONS.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

// const useAPI = (url, config) => {
const useAPI = (url) => {
  const [state, dispatch] = useReducer(reduce, initialState);

  const getUsers = async () => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      // const { data } = await axios.get(url, config);
      const { data } = await axios.get(url);
      dispatch({ type: AUTH_ACTIONS.GET, payload: data });
      // console.log(data)
      // console.log(state)
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };

  return {
    ...state,
    getUsers,
  };
};

export default useAPI;