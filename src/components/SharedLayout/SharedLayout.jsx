import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../SharedLayout/Header/Header';
import { Loader } from "../SharedLayout/Loader/Loader";
import { Container } from '../Container/Container';

const SharedLayout = () => {
  return (
    <>
      <Container>
      <Header />
      <Suspense fallback={<Loader/>}>
        <Outlet />
        </Suspense>
        </Container>
    </>
  );
};

export default SharedLayout;
