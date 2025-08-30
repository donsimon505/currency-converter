import { create } from "zustand";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

const useAuthStore = create((set) => ({
  currentUser: null,
  loading: true,

  signUp: async (email, password, fullname) => {
    const userCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (fullname) {
      await updateProfile(userCred.user, {
        displayName: fullname,
      });
    }

    set({ currentUser: userCred.user });
  },

  logIn: async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
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
