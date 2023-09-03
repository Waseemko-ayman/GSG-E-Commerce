"use client"
import useAuth from '@/hook/useAuth';
import React, { createContext, useContext } from 'react'

const AuthContext = createContext(null);
export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const data = useAuth();
// console.log(data)

  return (
    <AuthContext.Provider value={data}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider;