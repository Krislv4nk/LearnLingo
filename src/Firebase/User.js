
import { getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
    signInWithEmailAndPassword,
    reload,
    signOut
} from "firebase/auth";
import { auth } from './Firebase.js';
import { toast } from "react-toastify";

export  const userSignUp = async (dataForm) => {
  const { name, email, password } = dataForm;
  const auth = getAuth();
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: name });
    const user = userCredentials.user;
    await sendEmailVerification(auth.currentUser);
    await reload(user);
    if (user.emailVerified) {
      toast.success(`Welcome ${user.displayName} to LearnLingo`);
      localStorage.setItem("isSignUp", "true");
    }
    toast.info("Please, verify your email to complete registration and login!");
    return user;
  } catch (error) {
    toast.error(error.message || "Email already in use or other error!");
    console.error(error);
  }
}
//, setShowStatus
export const userSignIn = async (dataForm) => {
  const { email, password } = dataForm;
  const auth = getAuth();
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    if (res.user.emailVerified) {
      // setShowStatus(false);
      toast.success(`Welcome ${res.user.displayName} to LearnLingo`);
      localStorage.setItem("isLogin", "true");
    } else {
      toast.warn("Please, verify Your email!");
    }
  } catch (error) {
    toast.error(error.message || "Invalid email or password");
  }
}

export const LogOut = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
    localStorage.removeItem("isLogin");
    toast.success("Successfully logged out");
  } catch (error) {
    toast.error(error.message || "Error logging out");
  }
}

export const getCurrentUser = () => {
  
  const user = auth.currentUser;
  if (user !== null) {
    const userData = {
      name: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      uid: user.uid,
    };
    return userData;
  }
  return null;
}

export const checkIfUserExists = async (email) => {
  const auth = getAuth();
  const userCredential = await auth().fetchSignInMethodsForEmail(email);
  return userCredential.length > 0;
};