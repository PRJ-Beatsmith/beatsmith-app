import { useState, useEffect } from "react";

export const useOpenCV = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // If OpenCV is already loaded and initialized, set isReady to true
    if (window.cv && window.cv.onRuntimeInitialized) {
      setIsReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src = process.env.PUBLIC_URL + "/opencv.js";
    script.async = true;
    script.onload = () => {
      window.cv.onRuntimeInitialized = () => {
        setIsReady(true);
      };
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return isReady;
};

export default useOpenCV;
