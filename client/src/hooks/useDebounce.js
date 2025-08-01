import { useEffect, useState } from "react";

const useDebounce = (value, delay = 500) => {
   const [debounced, setDebounced] = useState(value);

   useEffect(() => {
      const handler = setTimeout(() => {
         setDebounced(value);
      }, delay);

      return () => clearTimeout(handler);
   }, [value, delay]);

   return debounced;
};

export default useDebounce;
