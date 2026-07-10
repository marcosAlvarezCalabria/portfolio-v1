import { useEffect } from 'react';

export function useGridPointer() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');

    const setGridPointer = (x: number, y: number) => {
      document.body.style.setProperty('--grid-pointer-x', `${x}px`);
      document.body.style.setProperty('--grid-pointer-y', `${y}px`);
    };

    const setDefault = () => {
      setGridPointer(window.innerWidth * 0.74, window.innerHeight * 0.2);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (media.matches) {
        return;
      }
      setGridPointer(event.clientX, event.clientY);
    };

    const onPointerLeave = () => {
      if (media.matches) {
        return;
      }
      setDefault();
    };

    setDefault();
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);
}
