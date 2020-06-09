import {useEffect, useState} from 'react'

function useWindowSize() {
  const isClientExt = typeof window === 'object'; // defined twice to avoid missing dependencies warning

  function getSizeExt() { // defined twice to avoid missing dependencies warning
    return {
      width: isClientExt ? window.innerWidth : undefined,
      height: isClientExt ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSizeExt);

  useEffect(() => {
    const isClient = typeof window === 'object';

    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
      };
    }
  
    if (!isClient) {
      return false;
    }
    
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

export default useWindowSize