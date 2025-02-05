import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading]= useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light" );
  const provider = new GoogleAuthProvider();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      }else{
        setLoading(true);
        
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
    
  };
  const LogInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const LogInWIthGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const LogOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  const darkTheme = theme === 'dark' ? true : false;
  const AuthInfo = {
    user,
    setUser,
    createUser,
    LogInUser,
    LogInWIthGoogle,
    LogOutUser,
    loading,
    setLoading,
    theme,
    toggleTheme,
    darkTheme
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
