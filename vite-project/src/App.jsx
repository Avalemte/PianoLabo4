import { useEffect } from 'react';

const Piano = () => {
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();
      switch (key) {
        
        case 'A':
          playNote('Do');
          break;
        case 'S':
          playNote('Re');
          break;
        case 'D':
          playNote('Mi');
          break;
        case 'F':
          playNote('Fa');
          break;
        case 'G':
          playNote('Sol');
          break;
        case 'H':
          playNote('La');
          break;
        case 'J':
          playNote('Si');
          break;

        case 'W':
            playNote('DoSostenido');
            break;
        case 'E':
            playNote('ReSostenido');
            break;
        case 'R':
            playNote('FaSostenido');
            break;
        case 'T':
            playNote('SolSostenido');
            break;
        case 'Y':
            playNote('LaSostenido');
            break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  

  const playNote = (note) => {
    const audio = new Audio(`/sonidos/${note}.wav`);
    audio.play();
  };

  return (
    <div className="destinations-container ">
      
      <div className="piano">
      <button className="white" onClick={() => playNote('Do')}>Do</button>
      <button className="black do-sostenido" onClick={() => playNote('DoSostenido')}>Do#</button>
      <button className="white" onClick={() => playNote('Re')}>Re</button>
      <button className="black re-sostenido" onClick={() => playNote('ReSostenido')}>Re#</button>
      <button className="white" onClick={() => playNote('Mi')}>Mi</button>
      <button className="white" onClick={() => playNote('Fa')}>Fa</button>
      <button className="black fa-sostenido" onClick={() => playNote('FaSostenido')}>Fa#</button>
      <button className="white" onClick={() => playNote('Sol')}>Sol</button>
      <button className="black sol-sostenido" onClick={() => playNote('SolSostenido')}>Sol#</button>
      <button className="white" onClick={() => playNote('La')}>La</button>
      <button className="black la-sostenido" onClick={() => playNote('LaSostenido')}>La#</button>
      <button className="white" onClick={() => playNote('Si')}>Si</button>
     
      </div>
      <div className="GrupoTeclas Top ">
        <section className="TeclasNegras "><span>W</span></section>
        <section className="TeclasNegras"><span>E</span></section>
        <section className="TeclasNegras "><span>R</span></section>
        <section className="TeclasNegras"><span>T</span></section>
        <section className="TeclasNegras "><span>Y</span></section>
   
      </div>
      <div className="GrupoTeclas ">
        <section className="TeclasBlancas "><span>A</span></section>
        <section className="TeclasBlancas"><span>S</span></section>
        <section className="TeclasBlancas "><span>D</span></section>
        <section className="TeclasBlancas"><span>F</span></section>
        <section className="TeclasBlancas "><span>G</span></section>
        <section className="TeclasBlancas"><span>H</span></section>
        <section className="TeclasBlancas "><span>J</span></section>
      </div>
     
        </div>
  );
};

export default Piano;





  