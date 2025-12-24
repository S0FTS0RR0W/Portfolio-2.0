import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const style = document.createElement("style");
    style.innerHTML = "* { cursor: none !important; }";
    document.head.appendChild(style);

    let isHovering = false;

    const move = (e) => {
      if (!isHovering) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursor.style.transition = "opacity 0.15s ease-out, transform 0s";
      }
    };

    const handleMouseOver = (e) => {
      const button = e.target.closest("button");
      const link = e.target.closest("a");
      const target = button || link;

      if (target) {
        isHovering = true;
        cursor.style.opacity = 0;
        cursor.style.transition = "opacity 0.15s ease-out";
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest("button") || e.target.closest("a");
      if (target && !target.contains(e.relatedTarget)) {
        isHovering = false;
        cursor.style.opacity = 1;
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      if (style.parentNode) document.head.removeChild(style);
    };
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
}
