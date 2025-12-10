import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function useGsapCarousel(trackRef: React.RefObject<HTMLDivElement>, slideCount: number) {
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const slides = Array.from(track.children) as HTMLElement[];
        let index = 0;
        const duration = 0.8;

        const setActive = (i: number) => {
            slides.forEach((s, k) => {
                gsap.to(s, { scale: k === i ? 1 : 0.92, opacity: k === i ? 1 : 0.55, duration: 0.5, ease: 'power2.out' });
            });
        };

        setActive(index);

        const next = () => {
            index = (index + 1) % slideCount;
            gsap.to(track, { xPercent: -100 * index, duration, ease: 'power3.inOut' });
            setActive(index);
        };

        const prev = () => {
            index = (index - 1 + slideCount) % slideCount;
            gsap.to(track, { xPercent: -100 * index, duration, ease: 'power3.inOut' });
            setActive(index);
        };

        const interval = setInterval(next, 4500);

        (track as any).__carouselNext = next;
        (track as any).__carouselPrev = prev;

        return () => clearInterval(interval);
    }, [trackRef, slideCount]);
}