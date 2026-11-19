import { useState } from 'react';
import { Link } from 'react-router-dom';
import atractius from '../data/atractius.json';
import AtractiuCard from '../components/AtractiuCard';
import FilterBar from '../components/FilterBar';

function AtractiusList() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  const categories = [...new Set(atractius.flatMap((a) => a.categories))].sort();

  const atractiusFiltrats = categoriaSeleccionada
    ? atractius.filter((a) => a.categories.includes(categoriaSeleccionada))
    : atractius;

  return (
    <div className="listado-contenedor">
      <div className="listado-cabecera">
        <h1 className="listado-titulo">Atractius culturals i naturals</h1>
        <Link to="/" className="boton-volver">← Tornar a la portada</Link>
      </div>
      
      <FilterBar
        categories={categories}
        selected={categoriaSeleccionada}
        onSelect={setCategoriaSeleccionada}
      />
      
      <div className="grid-atractivos">
        {atractiusFiltrats.map((atractiu) => (
          <AtractiuCard key={atractiu.id} atractiu={atractiu} />
        ))}
      </div>
    </div>
  );
}

export default AtractiusList;