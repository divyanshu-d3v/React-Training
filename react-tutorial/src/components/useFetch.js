import { useEffect, useState } from "react"

export default function useFetch(endpoint) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(endpoint);
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                console.error(`Error fetching data:`, error);
            }
        };
        fetchData();
    }, [endpoint])

    return { data, loading, error };
}

