<template>
  <div class="planets-container">
    <h1 class="mission-title">Missão Venus</h1>
    
    <!-- Linhas curvas entre os planetas - Desktop -->
    <svg class="orbit-lines desktop-orbits" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path class="orbit-path" d="M10,30 Q50,10 90,30" />
      <path class="orbit-path" d="M10,45 Q50,25 90,45" />
      <path class="orbit-path" d="M10,60 Q50,40 90,60" />
      <path class="orbit-path" d="M10,75 Q50,55 90,75" />
      <path class="orbit-path" d="M10,90 Q50,70 90,90" />
    </svg>
    
    <!-- Linhas curvas para mobile -->
    <svg class="orbit-lines mobile-orbits" viewBox="0 0 100 500" preserveAspectRatio="none">
      <path class="orbit-path" d="M20,50 Q50,50 80,50" />
      <path class="orbit-path" d="M20,150 Q50,150 80,150" />
      <path class="orbit-path" d="M20,250 Q50,250 80,250" />
      <path class="orbit-path" d="M20,350 Q50,350 80,350" />
      <path class="orbit-path" d="M20,450 Q50,450 80,450" />
    </svg>
    
    <nuxt-link to="/info" class="planet planet6">
      <span class="planet-text">Comece por Aqui!</span>
    </nuxt-link>
    <nuxt-link to="/hotel" class="planet planet1">
      <span class="planet-text">Hospedagem</span>
    </nuxt-link>
    <nuxt-link to="/alimentacao" class="planet planet3">
      <span class="planet-text">Alimentação</span>
    </nuxt-link>
    <nuxt-link to="/turismo" class="planet planet2">
      <span class="planet-text">Turismo</span>
    </nuxt-link>
    <nuxt-link to="/presentes" class="planet planet4">
      <span class="planet-text">Lista de Presentes</span>
    </nuxt-link>
    <nuxt-link to="/fotos" class="planet planet5">
      <span class="planet-text">Registro de Viagem</span>
    </nuxt-link>

  </div>
</template>

<style scoped>
.planets-container {
  position: relative;
  width: 100%;
  height: 100vh;
}

.mission-title {
  position: absolute;
  left: 50%;
  top: 5%; /* Alterado de 50% para 5% para mover para o topo */
  transform: translateX(-50%); /* Removido o translate-Y */
  color: white;
  font-size: 3rem;
  z-index: 10;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.3); /* Fundo semi-transparente */
  padding: 10px 20px;
  border-radius: 10px;
  width: auto; /* Ajustado para o conteúdo */
}

/* Media query para dispositivos móveis */
@media (max-width: 768px) {
  .mission-title {
    top: 10px;
    font-size: 2rem;
    padding: 5px 10px;
    width: 90%; /* Ajustado para evitar overflow em telas pequenas */
  }
}

.planet {
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: transform 0.3s ease;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 10px;
  z-index: 2; /* Ajuste o z-index dos planetas para ficarem acima das linhas */
}

.planet-text {
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  line-height: 1.2;
  text-align: center;
}

.planet:hover {
  transform: scale(1.2);
}

.planet1 {
  width: 95px;
  height: 95px;
  top: 15%;
  left: 10%;
  background: radial-gradient(circle, #078b3e, #08a35b); /* Mercury */
}

.planet2 {
  width: 100px;
  height: 100px;
  top: 20%;
  right: 15%;
  background: radial-gradient(circle, #ff0000, #800080); /* Venus */
}

.planet3 {
  width: 140px;
  height: 140px;
  bottom: 35%;
  left: 25%;
  background: radial-gradient(circle, #00ff99, #0099ff); /* Earth */
}

.planet4 {
  width: 160px;
  height: 160px;
  bottom: 20%;
  right: 20%;
  background: radial-gradient(circle, #25c4c4, #0000ff); /* Mars */
}

.planet5 {
  width: 170px;
  height: 170px;
  top: 65%;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, #ff66cc, #800080); /* Jupiter */
}

.planet6 {
  width: 180px;
  height: 180px;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, #ffcc00, #ff9900); /* Saturn */
}

.planet5:hover {
  transform: translateX(-50%) scale(1.2);
}


/* Media query para dispositivos móveis */
@media (max-width: 768px) {
  .planet {
    padding: 5px;
  }
  
  .planet-text {
    font-size: 0.7rem;
  }
  
  .planet1 {
    width: 70px;
    height: 70px;
  }
  
  .planet2 {
    width: 80px;
    height: 80px;
  }
  
  .planet3 {
    width: 100px;
    height: 100px;
  }
  
  .planet4 {
    width: 110px;
    height: 110px;
  }
  
  .planet5 {
    width: 120px;
    height: 120px;
  }
}

@media (max-width: 768px) {
  .planets-container {
    height: auto;
    min-height: 100vh;
    padding: 60px 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .mission-title {
    position: fixed;
    top: 10px;
    transform: translateX(-50%);
    font-size: 1.8rem;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px 0;
  }
  
  .planet {
    position: relative;
    margin: 15px auto;
    left: auto;
    right: auto;
    top: auto;
    bottom: auto;
    transform: none;
    padding: 5px;
  }
  
  .planet-text {
    font-size: 0.8rem;
  }
  
  .planet1 {
    width: 80px;
    height: 80px;
    margin-top: 60px;
margin-left: 10%;
  }
  
  .planet2 {
    width: 85px;
    height: 85px;
    margin-right: 15%;
  }
  
  .planet3 {
    width: 90px;
    height: 90px;
    margin-right: 25%;
  }
  
  .planet4 {
    width: 95px;
    height: 95px;
margin-left: 20%;
  }
  
  .planet5 {
    width: 100px;
    height: 100px;
    transform: none;
  }
  
  .planet:hover,
  .planet5:hover {
    transform: scale(1.1);
  }
}

/* Para telas muito pequenas */
@media (max-width: 400px) {
  .planet1 {
    width: 70px;
    height: 70px;
  }
  
  .planet2 {
    width: 75px;
    height: 75px;
  }
  
  .planet3 {
    width: 80px;
    height: 80px;
  }
  
  .planet4 {
    width: 85px;
    height: 85px;
  }
  
  .planet5 {
    width: 90px;
    height: 90px;
  }

  .planet6 {
    width: 95px;
    height: 95px;
  }
  
  .mission-title {
    font-size: 1.5rem;
  }
}

/* Adicione estes novos estilos para as linhas de órbita */
.orbit-lines {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none; /* Permite clicar através das linhas */
}

.orbit-path {
  fill: none;
  stroke: rgba(255, 255, 255, 0.2);
  stroke-width: 0.3;
  stroke-dasharray: 0.8 0.4;
  animation: orbitGlow 8s infinite linear;
}

.orbit-path:nth-child(2) {
  stroke: rgba(255, 255, 255, 0.15);
  animation-delay: 2s;
}

.orbit-path:nth-child(3) {
  stroke: rgba(255, 255, 255, 0.25);
  animation-delay: 4s;
}

.orbit-path:nth-child(4) {
  stroke: rgba(255, 255, 255, 0.18);
  animation-delay: 6s;
}

.orbit-path:nth-child(5) {
  stroke: rgba(255, 255, 255, 0.22);
  animation-delay: 3s;
}

@keyframes orbitGlow {
  0%, 100% { 
    stroke-opacity: 0.2;
    stroke-width: 0.2;
  }
  50% { 
    stroke-opacity: 0.5;
    stroke-width: 0.4;
  }
}

/* Esconde o layout não utilizado */
.mobile-orbits {
  display: none;
}

@media (max-width: 768px) {
  .desktop-orbits {
    display: none;
  }
  
  .mobile-orbits {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
  
  .orbit-path {
    stroke-width: 0.5;
  }
}
</style>