import { Link } from 'react-router-dom';
import portadaVideo from '../assets/portada.mp4';

function Home() {
  return (
    <div className="hero">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src={portadaVideo} type="video/mp4" />
      </video>

      <div className="hero-contenido">
        <h1 className="hero-titulo animate-fade-in">
          Turisme Cultural a Catalunya
        </h1>
        <p className="hero-subtitulo animate-fade-in delay-1">
          Arquitectura, pintura, paisatges i patrimoni religiós
        </p>
        <Link to="/atractius" className="hero-boton animate-fade-in delay-2">
          Explorar atractius
        </Link>
      </div>
    </div>
  );
}

export default Home;