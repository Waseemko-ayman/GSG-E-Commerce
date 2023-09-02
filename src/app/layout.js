"use client"
import { Inter } from "next/font/google";
import "../style/globals.css";
import StyledComponentsRegistry from "./lib/registry";
import AuthProvider from "@/context/AuthContext";
import { Provider } from "react-redux";
import store from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bran",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <AuthProvider>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </AuthProvider>
        </Provider>
      </body>
    </html>
  );
}
