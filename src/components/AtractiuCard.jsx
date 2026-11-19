import { Link } from 'react-router-dom';

function AtractiuCard({ atractiu }) {
  return (
    <Link to={`/atractius/${atractiu.id}`} className="tarjeta">
      <div className="tarjeta-img-wrapper">
        <img src={atractiu.imatge} alt={atractiu.nom} className="tarjeta-img" />
      </div>
      <div className="tarjeta-info">
        <h3 className="tarjeta-titulo">{atractiu.nom}</h3>
        <p className="tarjeta-meta">
          {atractiu.comarca} · {atractiu.estil || atractiu.tipus}
        </p>
        <div className="tarjeta-tags">
          {atractiu.categories.map((cat) => (
            <span key={cat} className="tag">
              {cat}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default AtractiuCard;