"use client"
import FooterRegister from "@/components/molecules/FooterRegister";
import { PATHS } from "@/constants/path";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";

export default function LayoutAuth({ children }) {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(true)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem('isAuth')
      setIsAuth(auth)
      console.log("AAAA ", auth);
    }
  }, [])
  return (
    <>
      <div>
        {
          !isAuth ? 
          <>
            {children}
            <FooterRegister />
          </>
          : 
          router.push(PATHS.HOME)
        }
      </div>
    </>
  );
}