import { useEffect, useState } from 'react';

import useScreenWidth from './useScreenWidth';

const useIsMobile = () => {
  const threshold = 500;
  const width = useScreenWidth();
  const [isMobile, setIsMobile] = useState(width <= threshold);

  useEffect(() => {
    setIsMobile(width > threshold);
  }, [width, threshold]);

  return isMobile;
};

export default useIsMobile;
