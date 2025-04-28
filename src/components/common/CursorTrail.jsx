import { useEffect } from "react";

export default function CursorTrail() {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    const colors = ["#b574c5"]; 

    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
      circle.style.opacity = "0"; 
    });

    window.addEventListener("mousemove", (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;

      const target = e.target;
      if (target.closest(".cursor-hover-target")) {
        circles.forEach((circle) => {
          circle.style.opacity = "1";
        });
      } else {
        circles.forEach((circle) => {
          circle.style.opacity = "0";
        });
      }
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = x - 20 + "px";
        circle.style.top = y - 20 + "px";
        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  }, []);

  return (
    <>
       {[...Array(21)].map((_, i) => (
        <div key={i} className="circle"></div>
      ))}
    </>
  );
}
