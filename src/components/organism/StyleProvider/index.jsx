"use client"
import StyledComponentsRegistry from "@/app/lib/registry";
import AuthProvider from "@/context/AuthContext";
import store from "@/redux/store";
import { Provider } from "react-redux";

const StyleProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </AuthProvider>
    </Provider>
  );
};

export default StyleProvider;
