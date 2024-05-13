"use client";
import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const StateContext = createContext({});

export const ContextProvider = ({ children }: any) => {
  const [visibleSection, setVisibleSection] = useState<string | null>();
  const sectionsRef = useRef([]);
  const headerRef = useRef(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const pathname = usePathname();

  useEffect(() => {
    const options = {
      threshold: 0.5,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSection(entry.target.getAttribute("id"));

          // console.log(entry.target.id);
        }
      });
    }, options);

    // const targetSections = document.querySelectorAll("section");
    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    // To disable the entire IntersectionObserver
  });

  const refCallback = useCallback((element: never) => {
    if (element) {
      sectionsRef.current.push(element);
    }
  }, []);

  return (
    <StateContext.Provider value={{ headerRef, refCallback, visibleSection }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
