import { useEffect, useRef } from "react";

export default function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();
  
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      document.addEventListener("click", handleClick, listenCapturing);
      return () => document.removeEventListener("click", handleClick, listenCapturing);
    },//setting the 3rd param as true will listen for the event only in capturing phase
      //i.e: only when we click when the modal is open. from top - down not down to top
    [handler, listenCapturing]
  );
  return ref;
}
