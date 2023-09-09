import { useReducer } from "react";
import { ROLES } from "@/constants";
import axios from "axios";
import { AUTH_API_URL } from "@/config/api";
import { AUTH_ACTIONS, AUTH_API_PATHS } from "@/constants/auth";
import Swal from "sweetalert2";
import { useRouter } from 'next/navigation'
import { PATHS } from "@/constants/path";

const getisAuth = () => localStorage.getItem("isAuth") || false;
const getUser = () => JSON.parse(localStorage.getItem("user")) || null;
const getToken = () => localStorage.getItem("token") || null;
const getRole = () => localStorage.getItem("role") || ROLES.GUEST;

var initialState = {
  isAuth: getisAuth(),
  user: getUser(),
  token: getToken(),
  role: getRole(),
  isLoading: false,
  error: null,
};
const reduce = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case AUTH_ACTIONS.AUTHORIZE:
      const token = action?.payload?.token || state?.token || localStorage.getItem("token");
      const role = action?.payload?.isAdmin ? ROLES.ADMIN : ROLES.USER;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        isAuth: true,
        user: action.payload,
        token: token,
        role: role,
        isLoading: false,
        error: null,
      };

    case AUTH_ACTIONS.LOGOUT:
      ["token", "user", "role", "isAuth"].forEach((item) =>
        localStorage.removeItem(item)
      );
      return {
        isAuth: false,
        user: null,
        token: null,
        role: ROLES.GUEST,
        isLoading: false,
        error: null,
      };

    case AUTH_ACTIONS.SET_ERROR:
      return {
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

const useAuth = () => {
  const [state, dispatch] = useReducer(reduce, initialState);
  const token = state.token || localStorage.getItem('token');
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const router = useRouter();

  // Login
  const login = async (body) => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      const { data } = await axios.post(AUTH_API_URL + AUTH_API_PATHS.LOGIN, body);
      // console.log(data)
      dispatch({ type: AUTH_ACTIONS.AUTHORIZE, payload: data?.data || data });
      Swal.fire({
        icon: "success",
        title: 'Logged in Successfully',
        showConfirmButton: false,
        timer: 2000
      });
      router.replace(PATHS.HOME);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: 'The data is incorrect!',
        showConfirmButton: false,
        timer: 2000
      });
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };

  // Signup
  const signup = async (body) => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      const { data } = await axios.post(AUTH_API_URL + AUTH_API_PATHS.SIGNUP, body);
      // console.log(data);
      dispatch({ type: AUTH_ACTIONS.AUTHORIZE, payload: data?.data || data });
      Swal.fire({
        icon: "success",
        title: 'Registered Successfully',
        showConfirmButton: false,
        timer: 2000
      });
      router.replace(PATHS.LOGIN);
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };

  // Logout
  const logout = () => {
    dispatch({ type: AUTH_ACTIONS.LOGOUT });
    router.replace(PATHS.LOGIN);
  };

  return {
    ...state,
    login,
    signup,
    logout,
  };
};

export default useAuth;
