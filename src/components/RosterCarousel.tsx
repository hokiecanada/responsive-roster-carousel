import { useCallback, useEffect, useRef, useState } from 'react';
import type { RosterMember } from '../data/players';
import { CarouselControls } from './CarouselControls';
import { PlayerCard } from './PlayerCard';

interface RosterCarouselProps { members: RosterMember[]; }
type SlidePosition = 'prev3' | 'prev2' | 'prev' | 'active' | 'next' | 'next2' | 'next3' | 'hidden';

function getPosition(index: number, activeIndex: number, total: number): SlidePosition {
  const forward = (index - activeIndex + total) % total;
  const backward = (activeIndex - index + total) % total;
  if (forward === 0) return 'active';
  if (forward === 1) return 'next';
  if (forward === 2) return 'next2';
  if (forward === 3) return 'next3';
  if (backward === 1) return 'prev';
  if (backward === 2) return 'prev2';
  if (backward === 3) return 'prev3';
  return 'hidden';
}

export function RosterCarousel({ members }: RosterCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(Math.min(3, Math.max(0, members.length - 1)));
  const [paused, setPaused] = useState(false);
  const pointerStartX = useRef<number | null>(null);

  const move = useCallback((direction: number) => {
    if (!members.length) return;
    setActiveIndex(current => (current + direction + members.length) % members.length);
  }, [members.length]);

  useEffect(() => {
    if (paused || members.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => move(1), 3000);
    return () => window.clearInterval(timer);
  }, [move, paused, members.length]);

  if (!members.length) return <section className="roster-carousel roster-carousel--empty"><p>Roster coming soon.</p></section>;

  return (
    <section
      className="roster-carousel"
      aria-label="Northstar team roster"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
        if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
      }}
    >
      <div
        className="roster-carousel__stage"
        tabIndex={0}
        onPointerDown={(event) => { pointerStartX.current = event.clientX; }}
        onPointerUp={(event) => {
          if (pointerStartX.current === null) return;
          const distance = event.clientX - pointerStartX.current;
          if (Math.abs(distance) > 35) move(distance < 0 ? 1 : -1);
          pointerStartX.current = null;
        }}
        onPointerCancel={() => { pointerStartX.current = null; }}
      >
        {members.map((member, index) => (
          <PlayerCard key={member.id} member={member} position={getPosition(index, activeIndex, members.length)} />
        ))}
        <CarouselControls onPrevious={() => move(-1)} onNext={() => move(1)} />
      </div>
    </section>
  );
}
