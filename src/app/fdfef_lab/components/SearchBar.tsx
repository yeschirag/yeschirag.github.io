import { Search, X } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="search-bar-section" role="search" aria-label="Course search filter">
      <div className="search-input-wrapper">
        <Search className="search-icon" size={18} aria-hidden="true" />
        <label htmlFor="search-input" className="sr-only">
          Search courses by title (case-sensitive)
        </label>
        <input
          id="search-input"
          type="text"
          className="search-input"
          placeholder="Filter courses by exact title (e.g. React, Systems)..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Filter courses by exact case-sensitive title"
        />
        <span className="search-tag" title="Search is case-sensitive">
          Aa
        </span>
        {searchTerm && (
          <button
            type="button"
            className="clear-btn"
            onClick={() => onSearchChange('')}
            aria-label="Clear search filter"
            title="Clear search"
          >
            <X size={15} aria-hidden="true" />
            <span className="clear-btn-text">Clear</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
