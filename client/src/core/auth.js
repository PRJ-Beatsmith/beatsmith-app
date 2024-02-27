import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
} from "firebase/auth";

export const defaultSignUp = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const defaultSignIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOut = () => {
  return auth.signOut();
};

export const passwordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const passwordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};

export const emailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
