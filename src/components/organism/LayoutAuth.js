"use client";

import { ROLES } from "@/constants";
import { PATHS } from "@/constants/path";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LayoutAuth = () => {
  const { role } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    console.log(role)
    if(role === ROLES.USER || role === ROLES.ADMIN) {
      router.replace(PATHS.HOME)
    } else if(role === ROLES.GUEST) {
      router.replace(PATHS.SIGNUP)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role])

  return (
    <></>
  )
}

export default LayoutAuth;