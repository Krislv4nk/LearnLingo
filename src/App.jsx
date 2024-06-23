import { Route, Routes, Navigate } from 'react-router-dom';
import PrivateRoute from './components/Auth/Routes/PrivateRoute';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage/HomePage';
import Teachers from 'pages/Teachers/Teachers';
import Favorites from 'pages/Favorites/Favorites';

function App() {
 
  return (
    
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
    
  );
}
export default App;
