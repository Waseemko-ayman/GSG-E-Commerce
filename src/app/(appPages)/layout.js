import MainLayout from "@/components/organism/MainLayout";

const layoutAppPages = ({ children }) => {
  return (
    <>
      <MainLayout>
        {children}
      </MainLayout>
    </>
  );
};

export default layoutAppPages;
