import FooterRegister from "@/components/molecules/FooterRegister";

export const metadata = {
  title: "Ecommerce - log in or sign up",
  descriptiom: "Ecommerce Website",
};

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