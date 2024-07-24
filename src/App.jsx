import { Route, Routes, Navigate } from 'react-router-dom';
import { Suspense, lazy } from "react";
import { Loader } from "components/SharedLayout/Loader/Loader.jsx";
import PrivateRoute from './components/Auth/Routes/PrivateRoute';
import SharedLayout from 'components/SharedLayout/SharedLayout';


const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const Teachers = lazy(() => import("./pages/Teachers/Teachers.jsx"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites.jsx"));



function App() {
 
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="teachers" element={<Teachers />}  />
         <Route path="favorites" element={<PrivateRoute>
              <Favorites />
            </PrivateRoute>} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}
export default App;
