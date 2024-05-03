import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathname = useRef();

  useEffect(() => {
    if (prevPathname.current && prevPathname.current !== pathname) {
      window.scrollTo(0, 0);
    }
    prevPathname.current = pathname;
  }, [pathname]);

  return null;
}

export default ScrollToTop;