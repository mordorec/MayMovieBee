import { useEffect } from 'react';
import { PaginatedResponse } from '../../types/paginatedEntities';

function usePaginatedEntity<T>(
    fetchFunction: () => Promise<PaginatedResponse<T>>,
    setFunction: (data: T[]) => void
) {
    useEffect(() => {
        fetchFunction()
            .then((data) => setFunction(data.rows))
            .catch((err) => console.error("Error fetching entity:", err));
    }, [fetchFunction, setFunction])
}

export default usePaginatedEntity;