import { useState, useEffect } from "react";

export default function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;

        const controller = new AbortController(); // To cancel previous fetch calls
        const { signal } = controller;

        async function fetchData() {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url, { ...options, signal });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchData();

        return () => controller.abort(); // Cleanup on unmount or URL change
    }, [url, options]);

    return { data, loading, error };
}
