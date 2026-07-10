import type { CSSProperties } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';

const CELL_STEP = 26;
export function GridMorphField() {
  const [grid, setGrid] = useState({ columns: 0, rows: 0 });
  const cellRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const timeoutsRef = useRef<Map<number, number>>(new Map());

  useEffect(() => {
    const syncGrid = () => {
      setGrid({
        columns: Math.ceil(window.innerWidth / CELL_STEP),
        rows: Math.ceil(window.innerHeight / CELL_STEP)
      });
    };

    syncGrid();
    window.addEventListener('resize', syncGrid);

    return () => {
      window.removeEventListener('resize', syncGrid);
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (media.matches || grid.columns === 0 || grid.rows === 0) {
      return;
    }

    const activateCell = (index: number, strong: boolean) => {
      const cell = cellRefs.current[index];

      if (!cell) {
        return;
      }

      const timeout = timeoutsRef.current.get(index);

      if (timeout) {
        window.clearTimeout(timeout);
      }

      cell.classList.add('is-active');
      cell.classList.toggle('is-strong', strong);

      const nextTimeout = window.setTimeout(() => {
        cell.classList.remove('is-active', 'is-strong');
      }, strong ? 260 : 180);

      timeoutsRef.current.set(index, nextTimeout);
    };

    const onPointerMove = (event: PointerEvent) => {
      const column = Math.floor(event.clientX / CELL_STEP);
      const row = Math.floor(event.clientY / CELL_STEP);

      for (let offsetY = -1; offsetY <= 1; offsetY += 1) {
        for (let offsetX = -1; offsetX <= 1; offsetX += 1) {
          const nextColumn = column + offsetX;
          const nextRow = row + offsetY;

          if (
            nextColumn < 0 ||
            nextColumn >= grid.columns ||
            nextRow < 0 ||
            nextRow >= grid.rows
          ) {
            continue;
          }

          const distance = Math.abs(offsetX) + Math.abs(offsetY);

          if (distance === 0 || (distance === 1 && Math.random() < 0.45)) {
            activateCell(nextRow * grid.columns + nextColumn, distance === 0);
          }
        }
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      timeoutsRef.current.forEach((timeout) => window.clearTimeout(timeout));
      timeoutsRef.current.clear();
    };
  }, [grid.columns, grid.rows]);

  const cells = useMemo(
    () => Array.from({ length: grid.columns * grid.rows }, (_, index) => index),
    [grid.columns, grid.rows]
  );

  return (
    <div
      className="grid-morph-field"
      aria-hidden="true"
      style={
        {
          '--grid-columns': grid.columns
        } as CSSProperties
      }
    >
      {cells.map((index) => (
        <span
          key={index}
          ref={(node) => {
            cellRefs.current[index] = node;
          }}
          className="grid-cell"
        />
      ))}
    </div>
  );
}
