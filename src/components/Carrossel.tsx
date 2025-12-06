import React, { useEffect, useRef } from "react";
import "./Carrossel.css";

const Carrossel: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const length = track.children.length;

    for (let i = 0; i < length; i++) {
      const clone = track.children[i].cloneNode(true) as HTMLElement;
      track.appendChild(clone);
    }
  }, []);

  return (
    <section id="carrossel">
      <h1>Dicas para e-commerce →</h1>

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
    </section>
  );
};

export default Carrossel;