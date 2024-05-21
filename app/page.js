
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div id="hero">
        <div className="hero-container">
          <p>Un jeu de tir tactique avec personnages en 5c5</p>
          <span>Valorant</span>
          <a href="https://playvalorant.com/fr-fr/" className='btn-link'>Je découvre</a>
        </div>
        <Image 
          src="/images/valorant-hero.webp"
          alt="Image représentant 3 agents de valorant"
          className="bg-hero"
          fill={true}
        />
      </div>
      
    </>
  );
}
