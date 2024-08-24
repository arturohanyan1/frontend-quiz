import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { EnumRoutes } from "../configs/routes";
import Main from "../pages/Main";
import Layout from "../layout/Layout";
import Category from "src/pages/Category";

const Routing: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path={EnumRoutes.MAIN} element={<Main />} />
        <Route path={EnumRoutes.CATEGORY} element={<Category />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Layout>
  );
};

export default Routing;
