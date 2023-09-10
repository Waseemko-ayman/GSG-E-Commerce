"use client"
import FooterRegister from "@/components/molecules/FooterRegister";

export default function LayoutAuth({ children }) {

  return (
    <>
      <div>
        {children}
        <FooterRegister />
      </div>
    </>
  );
}