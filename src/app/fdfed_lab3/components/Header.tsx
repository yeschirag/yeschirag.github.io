import { User } from 'lucide-react';

interface HeaderProps {
  sharedName: string;
  onSharedNameChange: (name: string) => void;
}

function Header({ sharedName, onSharedNameChange }: HeaderProps) {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="header-brand-group">
          <span className="header-eyebrow">
            Academic Registrar &middot; Course Catalog
          </span>
          <h1 className="header-title">Course Registration</h1>
          <p className="header-subtitle">
            Plan and manage your academic course selections for the upcoming semester.
          </p>
        </div>

        <div className="header-identity-group">
          <label htmlFor="shared-identity-input" className="identity-label">
            Active Student
          </label>
          <div className="identity-input-wrap">
            <User size={15} className="identity-icon" aria-hidden="true" />
            <input
              id="shared-identity-input"
              type="text"
              className="identity-input"
              value={sharedName}
              onChange={(e) => onSharedNameChange(e.target.value)}
              placeholder="Student name..."
              aria-label="Shared student identity"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
