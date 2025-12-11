import React, { useEffect, useRef, useState } from "react";
import "./Carrossel.css";

const Carrossel: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const length = track.children.length;

    for (let i = 0; i < length; i++) {
      const clone = track.children[i].cloneNode(true) as HTMLElement;
      track.appendChild(clone);
    }
  }, []);

  const scrollToCard = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const cardWidth = track.children[0].clientWidth + 32; // width + gap
    const scrollAmount = index * cardWidth;
    track.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    setCurrentIndex(index);
  };

  const nextCard = () => {
    const track = trackRef.current;
    if (!track) return;

    const totalCards = track.children.length / 2; // since we duplicated
    const nextIndex = (currentIndex + 1) % totalCards;
    scrollToCard(nextIndex);
  };

  const prevCard = () => {
    const track = trackRef.current;
    if (!track) return;

    const totalCards = track.children.length / 2;
    const prevIndex = currentIndex === 0 ? totalCards - 1 : currentIndex - 1;
    scrollToCard(prevIndex);
  };

  return (
    <section id="carrossel">
      <h1>Dicas para e-commerce →</h1>

      <div className="carrossel-wrapper">
        <button className="carrossel-arrow carrossel-arrow-prev" onClick={prevCard}>
          ‹
        </button>

        {/* 4) Associar a ref ao contêiner que vai rolar */}
        <div className="carrossel-container" ref={trackRef}>
        <div className="carrossel-card">
          <div className="carrossel-img">
            <img src="/images/abstract-shape.png" alt="Forma abstrata" />
          </div>
          <div className="carrossel-description">
            <p>Migração de Sistema</p>
            <h3>Bill & payments</h3>
            <p>Instantly know your cash position across all accounts</p>
          </div>
        </div>

        <div className="carrossel-card">
          <div className="carrossel-img">
            <img src="/images/Abstract Background.jpg" alt="Fundo abstrato" />
          </div>
          <div className="carrossel-description">
            <p>Migração de Sistema</p>
            <h3>Bill & payments</h3>
            <p>Instantly know your cash position across all accounts</p>
          </div>
        </div>

        <div className="carrossel-card">
          <div className="carrossel-img">
            <img src="/images/scrap color.jpg" alt="Texturas coloridas" />
          </div>
          <div className="carrossel-description">
            <p>Migração de Sistema</p>
            <h3>Bill & payments</h3>
            <p>Instantly know your cash position across all accounts</p>
          </div>
        </div>
        </div>

        <button className="carrossel-arrow carrossel-arrow-next" onClick={nextCard}>
          ›
        </button>
      </div>
    </section>
  );
};

export default Carrossel;