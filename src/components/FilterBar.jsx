function FilterBar({ categories, selected, onSelect }) {
  return (
    <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
      <button
        onClick={() => onSelect('')}
        className="tag"
        style={{
          cursor: 'pointer',
          border: 'none',
          backgroundColor: selected === '' ? '#1a1a1a' : '#f0f0f0',
          color: selected === '' ? 'white' : '#1a1a1a',
          transition: 'all 0.3s ease'
        }}
      >
        Tots
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className="tag"
          style={{
            cursor: 'pointer',
            border: 'none',
            backgroundColor: selected === cat ? '#1a1a1a' : '#f0f0f0',
            color: selected === cat ? 'white' : '#1a1a1a',
            transition: 'all 0.3s ease'
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;