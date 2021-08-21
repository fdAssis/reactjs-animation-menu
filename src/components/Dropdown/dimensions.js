import {useState, useCallback, useLayoutEffect} from 'react';

const getDimensions = (element) => element.getBoundingClientReact();

export function useDimensions(responsive = true) {
    const [dimensions, getDimensions] = useState(null);
    const [element, setElement] = useState(null);

    const hook = useCallback((e) => setElement(e), []);

    useLayoutEffect(() => {
        if(element){
            const updateDimensions = () => {
                window.requestAnimationFrame(() => {
                    setDimensions(getDimensions(element));
                });
            }

            updateDimensions();

            if(responsive) {
                window.addEventListener('resize', updateDimensions);

                return () => {
                    window.removeEventListener('resize', updateDimensions);
                }
            }
        }
    },[]);


    return [dimensions, element, hook]
}