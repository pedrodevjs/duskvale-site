import React from 'react';
import { Clock, Wrench } from 'lucide-react';

const petals = Array.from({ length: 15 }, (_, index) => ({
  left: `${(index * 37) % 100}%`,
  size: `${10 + ((index * 7) % 10)}px`,
  duration: `${12 + ((index * 5) % 10)}s`,
  delay: `-${(index * 3) % 20}s`,
}));

export default function SakuraMaintenance() {
  return (
    <main className="maintenance-page">
      <div className="petals" aria-hidden="true">
        {petals.map((petal, index) => (
          <span
            className="petal"
            key={index}
            style={{
              left: petal.left,
              width: petal.size,
              height: petal.size,
              animationDuration: petal.duration,
              animationDelay: petal.delay,
            }}
          />
        ))}
      </div>

      <div className="background-glow" aria-hidden="true">
        <span className="glow glow-pink" />
        <span className="glow glow-red" />
      </div>

      <section className="maintenance-card" aria-labelledby="maintenance-title">
        <div className="maintenance-copy">
          <div className="brand">DUSK<span>VALE</span></div>

          <div className="status-badge">
            <Wrench size={16} aria-hidden="true" />
            <span>EM MANUTENÇÃO</span>
          </div>

          <h1 id="maintenance-title">
            Aprimorando o <br />
            <span>Nosso Mundo</span>
          </h1>

          <p>
            Estamos plantando novas árvores e ajustando os sistemas do servidor para garantir a melhor experiência de jogo para você e seus amigos. Voltaremos online em breve!
          </p>

          <div className="actions">
            <button type="button" className="wait-button" disabled>
              <Clock size={20} aria-hidden="true" />
              Aguarde...
            </button>
          </div>
        </div>

        <div className="image-column">
          <div className="image-placeholder">
            <img
              src="/images/download.gif"
              alt="Personagem Sakura em estilo Minecraft"
            />
          </div>
        </div>
      </section>

    </main>
  );
}
