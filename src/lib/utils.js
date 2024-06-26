import { useEffect } from "react";

export function useClickOutsideListener(ref, callback) {
    useEffect(() => {
        const handleClickOutside = (event) => {
            console.log(ref.current.contains(event.target))

            if (ref.current && !ref.current.contains(event.target)) {
                callback();
              }
        };
      
        window.addEventListener("click", handleClickOutside);
      
        return () => {  
          window.removeEventListener("click", handleClickOutside);
        };
      },[ref, callback])
}