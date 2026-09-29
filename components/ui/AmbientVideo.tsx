'use client';

import { useEffect, useRef } from 'react';

type AmbientVideoProps = {
  src: string;
  poster: string;
  label: string;
  className?: string;
};

const VISIBILITY_THRESHOLD = 0.25;

export default function AmbientVideo({ src, poster, label, className = '' }: AmbientVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // O atributo `muted` no SSR não garante autoplay em todos os navegadores (iOS); a propriedade garante.
    video.muted = true;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Só baixa e reproduz enquanto está na tela: poupa dados e bateria no celular.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.pause();
          return;
        }
        // Autoplay bloqueado pelo navegador (ex.: modo economia) mantém o poster, que é o fallback desejado.
        video.play().catch(() => undefined);
      },
      { threshold: VISIBILITY_THRESHOLD },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-label={label}
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
