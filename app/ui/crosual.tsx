'use client';
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";

export function Carousel3DCard() {
  const slides = [0, 1, 2, 3];
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = (index: number) => {
    if (!trackRef.current) return;
    const angle = 360 / slides.length;
    gsap.to(trackRef.current, {
      rotateY: -angle * index,
      duration: 1,
      ease: "power3.inOut",
    });
    setCurrent(index);
  };

  const prevSlide = () => {
    const newIndex = current === 0 ? slides.length - 1 : current - 1;
    goToSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex = current === slides.length - 1 ? 0 : current + 1;
    goToSlide(newIndex);
  };

  useEffect(() => {
    if (trackRef.current) {
      gsap.set(trackRef.current, {
        rotateY: 0,
        transformPerspective: 800,
        transformStyle: "preserve-3d",
      });
    }
    // تایمر اتوپلی
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="relative w-full mr-24 mx-auto perspective-midrange">
      <div className="relative w-full h-[260px] rounded-xl overflow-visible">
        <div
          ref={trackRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {slides.map((i) => {
            const angle = (360 / slides.length) * i;
            return (
              <div
                key={i}
                className="absolute  w-100 h-60 flex flex-col items-center justify-center bg-linear-to-br from-amber-200 to-orange-300 rounded-xl shadow-lg"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(300px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="text-4xl">🥜</div>
                <div className="mt-2 text-lg font-bold">پسته ویژه</div>
                <div className="text-amber-700 text-sm">بسته‌بندی هدیه</div>
              </div>
            );
          })}
        </div>

        {/* کنترل‌ها */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* دایره‌های پایین */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {slides.map((i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2.5 h-2.5 rounded-full ${current === i ? "bg-amber-600" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
