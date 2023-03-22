import { Banner } from "components/Banner";
import { Outlet } from "react-router-dom";

interface DefaultPageProps {
  theme: boolean;
}

export const DefaultPage = ({ theme }: DefaultPageProps) => {
  return (
    <>
      <Banner theme={theme} />
      <Outlet />
    </>
  );
};
