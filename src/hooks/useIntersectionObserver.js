import { useEffect, useRef, useCallback } from 'react';

const useIntersectionObserver = (callback, options = {}) => {
    const observerRef = useRef(null);

    const ref = useCallback(node => {
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        if (node) {
            const observer = new IntersectionObserver(entries => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(node);
            observerRef.current = observer;
        }
    }, [callback, options]);

    useEffect(() => {
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return ref;
};

export default useIntersectionObserver;