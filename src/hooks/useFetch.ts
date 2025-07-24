import { useEffect, useState } from "react";

interface UseFetchOptions {
  skip?: boolean;
  deps?: unknown[]; // manual dependency array for reactivity
}

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useFetch<T>(
  fetchFn: () => Promise<T>,
  options: UseFetchOptions = {}
): UseFetchResult<T> {
  const { skip = false, deps = [] } = options;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(!skip);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (skip) return;

    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetchFn();
        if (!result) throw new Error("Something not work correctly");

        if (!cancelled) setData(result);
      } catch (err: any) {
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps); // re-fetch on dependency changes

  return { data, loading, error };
}
