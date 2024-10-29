import { useState, useEffect } from 'react';
import { bg1, bg2, bg3, bg4 } from './assets/imag';
import phrases from './phrases.json';
import './App.css'; 

const imagenes = [bg1, bg2, bg3, bg4];

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  const [phrase, setPhrase] = useState(phrases[getRandomIndex(phrases.length)]);
  const [img, setImg] = useState(imagenes[getRandomIndex(imagenes.length)]);

  useEffect(() => {
    // Actualiza la frase y la imagen cada 5 segundos
    const intervalId = setInterval(() => {
      setPhrase(phrases[getRandomIndex(phrases.length)]);
      setImg(imagenes[getRandomIndex(imagenes.length)]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // Función para actualizar la frase y la imagen manualmente
  const changePhrase = () => {
    setPhrase(phrases[getRandomIndex(phrases.length)]);
    setImg(imagenes[getRandomIndex(imagenes.length)]);
  };

  return (
    <div className="wrapper" style={{ backgroundImage: `url('${img}')` }}>
      <div className="container">
        {/* Encabezado */}
        <h1 className="heading">GALLETAS DE LA <br /> FORTUNA</h1>
        {/* Contenido */}
        <div className="card">
          <div className="card_body">
            <q className="phrase">{phrase.phrase}</q>
            <cite className="author">{phrase.author}</cite>
          </div>
          {/* Botón para actualizar la frase y la imagen */}
          <button onClick={changePhrase} className="btn">Actualizar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
