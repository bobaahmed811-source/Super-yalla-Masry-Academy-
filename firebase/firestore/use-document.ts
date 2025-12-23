'use client';

import { useState, useEffect } from 'react';
import {
  onSnapshot,
  DocumentReference,
  DocumentData,
  FirestoreError,
} from 'firebase/firestore';
import { useFirestore } from '@/firebase/hooks';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export type WithId<T> = T & { id: string };

export interface UseDocumentResult<T> {
  data: WithId<T> | null;
  isLoading: boolean;
  error: FirestoreError | Error | null;
}

export function useDocument<T = any>(
  memoizedDocRef: (DocumentReference<DocumentData> & { __memo?: boolean }) | null
): UseDocumentResult<T> {
  type ResultItemType = WithId<T>;
  type StateDataType = ResultItemType | null;

  const [data, setData] = useState<StateDataType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<FirestoreError | Error | null>(null);
  const firestore = useFirestore();

  useEffect(() => {
    if (!memoizedDocRef || !firestore) {
      setData(null);
      setIsLoading(false);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    const unsubscribe = onSnapshot(
      memoizedDocRef,
      (docSnapshot) => {
        if (docSnapshot.exists()) {
          setData({ ...(docSnapshot.data() as T), id: docSnapshot.id });
        } else {
          setData(null);
        }
        setError(null);
        setIsLoading(false);
      },
      (error: FirestoreError) => {
        const contextualError = new FirestorePermissionError({
          path: memoizedDocRef.path,
          operation: 'get',
        });
        setError(contextualError);
        setData(null);
        setIsLoading(false);
        errorEmitter.emit('permission-error', contextualError);
      }
    );

    return () => unsubscribe();
  }, [memoizedDocRef, firestore]);

  // التحقق الإلزامي من الـ Memoization
  if (memoizedDocRef && !memoizedDocRef.__memo) {
    throw new Error(
      'Yalla Masry Error: ' + memoizedDocRef + ' was not properly memoized using useMemoFirebase'
    );
  }
  return { data, isLoading, error };
}
