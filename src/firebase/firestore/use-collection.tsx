'use client';
import { useState, useEffect } from 'react';
import { onSnapshot, QuerySnapshot, DocumentData, Query, CollectionReference } from 'firebase/firestore';

export function useCollection<T = any>(memoizedQuery: Query<DocumentData> | CollectionReference<DocumentData> | null) {
  const [data, setData] = useState<T[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!memoizedQuery) {
      setData(null);
      setIsLoading(false);
      return;
    }

    const unsubscribe = onSnapshot(memoizedQuery, (snapshot) => {
      const results = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as T));
      setData(results);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [memoizedQuery]);

  return { data, isLoading };
}
