

import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const PublicRoute = ({ children, redirectTo = '/home' }) => {
    const { currentUser } = useAuth();

  return currentUser ? <Navigate to={redirectTo} /> : children;;
};

export default PublicRoute;


