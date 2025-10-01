import React from "react";
import { useEffect, useState } from "react";
import Header from "../Components/Header";
import MobileHeader from "../Components/MobileHeader";

// Custom hook to detect mobile screen sizes
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

function Homepage() {
  const isMobile = useIsMobile();

  return (
    
    <div>
      {isMobile ? <MobileHeader /> : <Header />}
     {/*} <Credits /> */}
    </div>
  );
}

export default Homepage;