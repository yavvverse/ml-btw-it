import { useEffect, useRef } from "react";

const EuphoriaStars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const colors = ["#8B5CF6", "#EC4899", "#3B82F6", "#F59E0B", "#FFFFFF"];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedY = Math.random() * -0.3 - 0.05;
        this.opacity = Math.random();
        this.fadeSpeed = Math.random() * 0.01 + 0.002;
        this.isStar = Math.random() > 0.8;
      }

      update() {
        this.y += this.speedY;
        this.opacity += this.fadeSpeed;
        if (this.opacity >= 1 || this.opacity <= 0) {
          this.fadeSpeed *= -1;
        }
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, this.opacity));
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const particles = [];
    const particleCount = Math.floor(
      (window.innerWidth * window.innerHeight) / 15000,
    );
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-60"
    />
  );
};

export default EuphoriaStars;
