import { useEffect, useRef } from "react";
import "./SpaceBackground.scss";

export default function SpaceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width;
    let height;
    let animationId;

    const STAR_COUNT = 1500;
    const SPEED = 0.8;
    const STAR_AREA = 4;

    const stars = [];

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function createStar() {
      return {
        x: (Math.random() - 0.5) * width * STAR_AREA,
        y: (Math.random() - 0.5) * height * STAR_AREA,
        z: Math.random() * width,
        color: randomColor(),
      };
    }

    function randomColor() {
      const colors = [
        "#FFFFFF",
        "#CDE8FF",
        "#B8D8FF",
        "#C5B3FF",
        "#DDF4FF",
      ];

      return colors[Math.floor(Math.random() * colors.length)];
    }

    resize();

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push(createStar());
    }

    function animate() {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);

      for (const star of stars) {
        star.z -= SPEED;

        if (star.z <= 1) {
          star.x = (Math.random() - 0.5) * width * STAR_AREA;
          star.y = (Math.random() - 0.5) * height * STAR_AREA;
          star.z = width;
          star.color = randomColor();
        }

        const k = 140 / star.z;

        const x = star.x * k + width / 2;
        const y = star.y * k + height / 2;

        if (x < 0 || x > width || y < 0 || y > height) continue;

        const radius = (1 - star.z / width) * 3;

        const tailLength = 1; // plus petit = moins de traînée

        const tailX = star.x * (140 / (star.z + tailLength)) + width / 2;
        const tailY = star.y * (140 / (star.z + tailLength)) + height / 2;

        ctx.beginPath();
        ctx.strokeStyle = star.color;
        ctx.lineWidth = Math.max(radius, 0.23);
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(x, y);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = star.color;
        ctx.arc(x, y, Math.max(radius, 0.5), 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="space-background" />
      <div className="space-glow"></div>
    </>
  );
}