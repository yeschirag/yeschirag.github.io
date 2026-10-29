import React, { useState } from 'react';
import { X, AlertTriangle, RotateCcw, Check, Sparkles } from 'lucide-react';
import { Course } from './CourseCard';

interface CourseDetailsProps {
  course: Course | null;
  isSelectedHidden: boolean;
  onUpdateTitle: (courseId: string, newTitle: string) => void;
  onClose: () => void;
  onClearSearch: () => void;
}

function CourseDetails({
  course,
  isSelectedHidden,
  onUpdateTitle,
  onClose,
  onClearSearch,
}: CourseDetailsProps) {
  const [editedTitle, setEditedTitle] = useState(course ? course.title : '');
  const [error, setError] = useState('');

  // If no course is selected (State C)
  if (!course) {
    return (
      <section
        className="utility-card course-details-section details-state-c"
        aria-labelledby="details-placeholder-heading"
      >
        <div className="utility-card-header">
          <h2 id="details-placeholder-heading" className="utility-title">
            Course Details
          </h2>
        </div>
        <div className="details-placeholder-content" role="status">
          <div className="placeholder-icon-wrap">
            <Sparkles size={24} className="placeholder-icon" aria-hidden="true" />
          </div>
          <h3 className="placeholder-title">No course selected</h3>
          <p className="placeholder-desc">
            Select a course to view its details.
          </p>
        </div>
      </section>
    );
  }

  // A course is selected (and may be hidden by current filter - State D)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = editedTitle.trim();
    if (!trimmed) {
      setError('Title cannot be empty.');
      return;
    }
    onUpdateTitle(course.id, trimmed);
    setError('');
  };

  return (
    <section
      className={`utility-card course-details-section ${isSelectedHidden ? 'details-state-d' : ''}`}
      aria-labelledby="details-heading"
    >
      <div className="utility-card-header">
        <h2 id="details-heading" className="utility-title">
          Course Details
        </h2>
        <button
          type="button"
          className="details-close-btn"
          onClick={onClose}
          aria-label="Close course details panel"
          title="Deselect course"
        >
          <X size={16} aria-hidden="true" />
        </button>
      </div>

      {isSelectedHidden && (
        /* State D: Selected course is hidden by this filter */
        <div className="filter-hidden-notice" role="status">
          <div className="notice-icon-column">
            <AlertTriangle size={18} className="notice-icon" aria-hidden="true" />
          </div>
          <div className="notice-content">
            <strong className="notice-title">
              Selected course is hidden by this filter
            </strong>
            <p className="notice-desc">
              Your selected course still exists. Clear or change the search to find it in the list.
            </p>
            <button
              type="button"
              className="secondary-btn btn-sm notice-action-btn"
              onClick={onClearSearch}
            >
              <RotateCcw size={13} aria-hidden="true" />
              <span>Clear Search to View in List</span>
            </button>
          </div>
        </div>
      )}

      <div className="details-info details-info-card">
        <p className="details-row">
          <strong className="details-label">Course ID:</strong> <code>{course.id}</code>
        </p>
        <p className="details-row">
          <strong className="details-label">Current Title:</strong>{' '}
          <span className="details-value-title">{course.title}</span>
        </p>
        <p className="details-row">
          <strong className="details-label">Category:</strong>{' '}
          <span className="details-category-pill">{course.category}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="edit-title-form" noValidate>
        <div className="form-group">
          <label htmlFor="edit-title-input" className="form-label">
            Edit Course Title
          </label>
          <input
            id="edit-title-input"
            type="text"
            className="form-input"
            value={editedTitle}
            onChange={(e) => {
              setEditedTitle(e.target.value);
              if (error) setError('');
            }}
            placeholder="Enter updated course title..."
          />
        </div>

        {error && (
          <p className="form-error" role="alert" aria-live="polite">
            {error}
          </p>
        )}

        <button type="submit" className="primary-btn submit-btn save-title-btn">
          <Check size={15} aria-hidden="true" />
          <span>Save Title</span>
        </button>
      </form>
    </section>
  );
}

export default CourseDetails;
