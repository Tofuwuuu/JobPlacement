// src/components/JobFilters.jsx
export default function JobFilters({ onFilter }) {
    const [filters, setFilters] = useState({
      search: '',
      location: '',
      minSalary: ''
    });
  
    const handleChange = (e) => {
      setFilters({ ...filters, [e.target.name]: e.target.value });
    };
  
    return (
      <div className="filters">
        <input
          type="text"
          name="search"
          placeholder="Search jobs..."
          onChange={handleChange}
        />
        <select name="location" onChange={handleChange}>
          <option value="">All Locations</option>
          <option value="Manila">Manila</option>
          <option value="Cavite">Cavite</option>
        </select>
        <input
          type="number"
          name="minSalary"
          placeholder="Minimum Salary"
          onChange={handleChange}
        />
        <button onClick={() => onFilter(filters)}>Apply Filters</button>
      </div>
    );
  }