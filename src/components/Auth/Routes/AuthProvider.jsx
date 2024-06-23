// import { createContext, useContext, useState, useEffect } from 'react';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';


// const AuthContext = createContext();


// export const AuthProvider = ({ children, Loader }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });
//     return unsubscribe;
//   }, []);

//   return (
//     <AuthContext.Provider value={{ currentUser }}>
//       {loading ? <Loader /> : children}
//     </AuthContext.Provider>
//   );
// };


// export const useAuth = () => {
//   return useContext(AuthContext);
// };
