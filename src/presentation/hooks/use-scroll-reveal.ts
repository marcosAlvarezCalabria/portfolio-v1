import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    if (cards.length === 0) {
      return;
    }

    if (media.matches) {
      cards.forEach((card) => card.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            return;
          }

          entry.target.classList.remove('is-visible');
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-4% 0px -10% 0px'
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);
}
