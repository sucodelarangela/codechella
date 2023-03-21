import { Banner } from "components/Banner";
import { Outlet } from "react-router-dom";

export const DefaultPage = ({ theme }) => {
  return (
    <>
      <Banner theme={theme} />
      <Outlet />
    </>
  );
};
