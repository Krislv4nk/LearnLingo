import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../SharedLayout/Header/Header';
import { Loader } from "../SharedLayout/Loader/Loader";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
