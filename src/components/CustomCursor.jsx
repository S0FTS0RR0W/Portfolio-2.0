import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = "* { cursor: none !important; }";
    document.head.appendChild(style);

    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    // remove cursor when hovering on buttons
    const handleMouseEnter = (e) => {
      if (e.target.tagName === "BUTTON" || e.target.closest("button")) {
        cursorRef.current.style.display = "none";
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.tagName === "BUTTON" || e.target.closest("button")) {
        cursorRef.current.style.display = "block";
      }
    };

    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);
    

    //make cursor snap to button
    const handleButtonHover = (e) => {
      if (e.target.tagName === "BUTTON" || e.target.closest("button")) {
        const buttonRect = e.target.getBoundingClientRect();
        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        const buttonCenterY = buttonRect.top + buttonRect.height / 2;
        cursorRef.current.style.transform = `translate(${buttonCenterX}px, ${buttonCenterY}px) scale(3)`;
        cursorRef.current.style.transition = "transform 0.2s ease-out";
      } else {
        cursorRef.current.style.transition = "none";
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1)`;
      }
    };

    document.addEventListener("mouseover", handleButtonHover);
    

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.head.removeChild(style);
    };
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
}
