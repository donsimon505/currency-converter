import { create } from "zustand";
import { auth } from "../firebase";
import {
  createUserWithEmailandPassword,
  signInWithEmailandPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const useAuthStore = create((set) => ({
  currentUser: null,
  loading: true,

  signUp: async (email, password) => {
    await createUserWithEmailandPassword(auth, email, password);
  },

  logIn: async (email, password) => {
    await signInWithEmailandPassword(auth, email, password);
  },

  logOut: async () => {
    await signOut(auth);
    set({ currentUser: null });
  },

  setCurrentUser: (user) => set({ currentUser: user, loading: false }),
}));

onAuthStateChanged(auth, (user) => {
  useAuthStore.getState().setCurrentUser(user);
});

export default useAuthStore;
