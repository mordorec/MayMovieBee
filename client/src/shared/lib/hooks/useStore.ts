import { useContext } from 'react';
import { Context } from '../../../shared/types/context';

function useStore() {
    const context = useContext(Context);

    if (!context) {
        throw new Error("Context must be used within a Provider");
    }

    return context;
}

export default useStore;