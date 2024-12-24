import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function useFetchEntity<T>(
    fetchFunction: (id: number) => Promise<T>,
    setFunction: (data: T) => void
) {
    const { id } = useParams<{ id: string }>()

    useEffect(() => {
        const numericId = Number(id);
        if (!isNaN(numericId)) {
            fetchFunction(numericId)
                .then((data) => setFunction(data))
                .catch((err) => console.error("Error fetching entity:", err));
        } else {
            console.error("Invalid ID:", id);
        }
    }, [id, fetchFunction, setFunction])
}

export default useFetchEntity;