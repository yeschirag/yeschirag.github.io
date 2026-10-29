import React from 'react';

export interface Course {
  id: string;
  title: string;
  category: string;
}

interface CourseCardProps {
  course: Course;
  isInterested: boolean;
  onToggleInterest: (courseId: string) => void;
  isSelected: boolean;
  onSelect: (courseId: string) => void;
  sharedName: string;
}

function CourseCard({
  course,
  isInterested,
  onToggleInterest,
  isSelected,
  onSelect,
  sharedName,
}: CourseCardProps) {
  return (
    <article
      className={`course-card ${isSelected ? 'course-card-selected' : ''} ${isInterested ? 'course-card-interested' : ''}`}
      onClick={() => onSelect(course.id)}
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      onKeyDown={(e) => {
        if (e.target !== e.currentTarget) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(course.id);
        }
      }}
    >
      <div className="course-card-header">
        <span className="course-category-tag">
          <span className="category-value">{course.category}</span>
        </span>
        {isSelected && (
          <span className="selected-indicator" aria-label="Currently selected course">
            Selected
          </span>
        )}
      </div>

      <h3 className="course-title">{course.title}</h3>

      <div className="course-card-meta">
        <span className="course-student-tag" title={`Active registrant: ${sharedName}`}>
          <span className="student-label">Student:</span>{' '}
          <span className="student-name">{sharedName}</span>
        </span>
      </div>

      <div
        className="course-card-footer"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <label className="checkbox-label" htmlFor={`interest-${course.id}`}>
          <input
            id={`interest-${course.id}`}
            type="checkbox"
            checked={isInterested}
            onChange={() => onToggleInterest(course.id)}
          />
          <span className="checkbox-custom-indicator" aria-hidden="true" />
          <span className="checkbox-text">Mark Interest</span>
        </label>
      </div>
    </article>
  );
}

export default CourseCard;
