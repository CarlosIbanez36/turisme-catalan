import { useParams, Link } from 'react-router-dom';
import atractius from '../data/atractius.json';

function AtractiuDetall() {
  const { id } = useParams();
  const atractiu = atractius.find((a) => a.id === id);

  if (!atractiu) {
    return (
      <div className="detalle-contenedor">
        <h1 className="detalle-titulo">Atractiu no trobat</h1>
        <Link to="/atractius" className="boton-volver">← Tornar al llistat</Link>
      </div>
    );
  }

  return (
    <div className="detalle-contenedor">
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/atractius" className="boton-volver">← Tornar al llistat</Link>
      </div>

      <img src={atractiu.imatge} alt={atractiu.nom} className="detalle-img" />

      <h1 className="detalle-titulo">{atractiu.nom}</h1>
      <p className="detalle-meta">
        {atractiu.comarca} · {atractiu.tipus} · {atractiu.estil || 'sense estil definit'}
      </p>
      
      <p className="detalle-texto">{atractiu.descripcio}</p>

      {/* AQUÍ EMPIEZA EL NUEVO BLOQUE DE LA REFLEXIÓN */}
      {atractiu.reflexio && (
        <blockquote style={{
          margin: '3rem 0',
          padding: '2rem 3rem',
          backgroundColor: 'rgba(140, 94, 68, 0.05)', // Un tono tierra muy suave
          borderLeft: '4px solid var(--color-tierra)', // Línea lateral color tierra
          fontFamily: 'var(--fuente-titulos)',
          fontSize: '1.3rem',
          fontStyle: 'italic',
          color: 'var(--color-cielo)',
          lineHeight: '1.7'
        }}>
          <p style={{ margin: 0 }}>"{atractiu.reflexio}"</p>
        </blockquote>
      )}
      {/* AQUÍ TERMINA EL BLOQUE */}

      <div className="tarjeta-tags" style={{ marginTop: '1rem' }}>
        {atractiu.categories.map((cat) => (
          <span key={cat} className="tag">{cat}</span>
        ))}
      </div>
    </div>
  );
}

export default AtractiuDetall;