


import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Loader} from '../../SharedLayout/Loader/Loader'

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    
    return <div><Loader/></div>;
  }

  const isAuthenticated = currentUser && currentUser.emailVerified;
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;


