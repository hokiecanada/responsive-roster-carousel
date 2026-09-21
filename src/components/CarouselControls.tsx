interface CarouselControlsProps { onPrevious: () => void; onNext: () => void; }

export function CarouselControls({ onPrevious, onNext }: CarouselControlsProps) {
  return (
    <>
      <button className="carousel-button carousel-button--previous" type="button" onClick={onPrevious} aria-label="Previous profile">‹</button>
      <button className="carousel-button carousel-button--next" type="button" onClick={onNext} aria-label="Next profile">›</button>
    </>
  );
}
