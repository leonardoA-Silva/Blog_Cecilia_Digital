import { useRef, useState, useEffect } from "react";

interface CarrosselProps {
  cardClass: string; // ".carrossel-card" ou ".carrossel-card2"
  children: React.ReactNode;
}

const Carrossel: React.FC<CarrosselProps> = ({ cardClass, children }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  // calcula largura do card
  useEffect(() => {
    if (trackRef.current) {
      const firstCard = trackRef.current.querySelector(cardClass) as HTMLElement;
      if (firstCard) {
        setCardWidth(firstCard.offsetWidth + 20); // largura + gap
      }
    }
  }, [cardClass]);

  const move = (direction: number) => {
    if (!trackRef.current) return;
    const newIndex = currentIndex + direction;
    const track = trackRef.current;

    track.style.transition = "transform 0.4s ease";
    track.style.transform = `translateX(-${cardWidth * newIndex}px)`;

    track.addEventListener(
      "transitionend",
      () => {
        const half = track.children.length / 2;
        let finalIndex = newIndex;

        if (newIndex >= half) {
          track.style.transition = "none";
          finalIndex = 0;
          track.style.transform = `translateX(0px)`;
          requestAnimationFrame(() => {
            track.style.transition = "transform 0.4s ease";
          });
        }

        if (newIndex < 0) {
          track.style.transition = "none";
          finalIndex = half - 1;
          track.style.transform = `translateX(-${cardWidth * finalIndex}px)`;
          requestAnimationFrame(() => {
            track.style.transition = "transform 0.4s ease";
          });
        }

        setCurrentIndex(finalIndex);
      },
      { once: true }
    );
  };

  return (
    <div className="carrossel-controls">
      <button className="seta esquerda" onClick={() => move(-1)}>◀</button>
      <div className="carrossel-wrapper">
        <div className="carrossel-container" ref={trackRef}>
          {children}
          {children} {/* duplicação para efeito infinito */}
        </div>
      </div>
      <button className="seta direita" onClick={() => move(1)}>▶</button>
    </div>
  );
};

export default Carrossel;
