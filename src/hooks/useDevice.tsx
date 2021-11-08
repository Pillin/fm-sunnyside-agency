import { useState, useEffect, useCallback } from "react";

const useDeviceSize = () => {
  const [sizes, setSizes] = useState({
    isMobile: false,
    isDesktop: false,
    isTablet: false
  });


  const changeSizes = useCallback(() => {
    const isMobile = window.innerWidth < 426;
    const isTablet = window.innerWidth > 425 && window.innerWidth < 769;
    const isDesktop = window.innerWidth > 769;
    setSizes({ isMobile, isTablet, isDesktop });
  }, [window]);

  useEffect(() => {
    changeSizes();
    window.addEventListener("resize", changeSizes);
    return () => window.removeEventListener("resize", changeSizes);
  }, []);

  return sizes;
};

export default useDeviceSize;