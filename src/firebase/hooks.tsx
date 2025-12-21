'use client';

import { useContext, useState, useEffect, createContext } from 'react';
import { onAuthStateChanged, type User, type Auth } from 'firebase/auth';
import { doc, getDoc, type Firestore } from 'firebase/firestore';
import type { FirebaseApp } from 'firebase/app';

interface FirebaseContextValue {
  firebaseApp: FirebaseApp | null;
  auth: Auth | null;
  firestore: Firestore | null;
}

const FirebaseContext = createContext<FirebaseContextValue>({
  firebaseApp: null,
  auth: null,
  firestore: null,
});

export function useFirebase() {
  const context = useContext(FirebaseContext);
  return context;
}

export const useAuth = () => useFirebase().auth;
export const useFirestore = () => useFirebase().firestore;

export function useUser() {
  const auth = useAuth();
  const firestore = useFirestore();
  const [user, setUser] = useState<any>(null);
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    if (!auth) return;
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && firestore) {
        const userDoc = await getDoc(doc(firestore, 'users', user.uid));
        setUser({ ...user, ...userDoc.data() });
      } else {
        setUser(null);
      }
      setIsUserLoading(false);
    });
    return () => unsubscribe();
  }, [auth, firestore]);

  return { user, isUserLoading };
}
