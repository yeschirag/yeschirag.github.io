import React from 'react';
import { Inbox, SearchX, RotateCcw } from 'lucide-react';
import CourseCard, { Course } from './CourseCard';

interface CourseListProps {
  courses: Course[];
  isSourceEmpty: boolean;
  hasNoMatches: boolean;
  onClearSearch: () => void;
  interestedCourseIds: string[];
  onToggleInterest: (courseId: string) => void;
  selectedCourseId: string | null;
  onSelectCourse: (courseId: string) => void;
  sharedName: string;
  searchControl: React.ReactNode;
}

function CourseList({
  courses,
  isSourceEmpty,
  hasNoMatches,
  onClearSearch,
  interestedCourseIds,
  onToggleInterest,
  selectedCourseId,
  onSelectCourse,
  sharedName,
  searchControl,
}: CourseListProps) {
  return (
    <section className="course-list-section" aria-labelledby="available-courses-heading">
      <div className="catalog-header-bar">
        <div className="catalog-title-group">
          <div className="catalog-title-row">
            <h2 id="available-courses-heading" className="catalog-title">
              Available Courses
            </h2>
            {!isSourceEmpty && (
              <span className="course-count-pill" title={`${courses.length} courses listed`}>
                {courses.length}
              </span>
            )}
          </div>
          <p className="catalog-desc">
            Explore offerings, toggle your interest, and select any course to inspect or edit.
          </p>
        </div>

        {searchControl}
      </div>

      {isSourceEmpty ? (
        /* State A: Source collection is truly empty */
        <div className="empty-state-card state-source-empty" role="status">
          <div className="empty-state-icon-wrap">
            <Inbox size={32} className="empty-state-icon" aria-hidden="true" />
          </div>
          <h3 className="empty-state-title">No courses yet</h3>
          <p className="empty-state-desc">
            Your course collection is empty. Use the form on the right to add your first course.
          </p>
        </div>
      ) : hasNoMatches ? (
        /* State B: Courses exist, but current search has zero matches */
        <div className="empty-state-card state-no-matches" role="status">
          <div className="empty-state-icon-wrap">
            <SearchX size={32} className="empty-state-icon" aria-hidden="true" />
          </div>
          <h3 className="empty-state-title">No matching courses</h3>
          <p className="empty-state-desc">
            No course titles match your query. Remember that filtering is case-sensitive.
          </p>
          <button
            type="button"
            className="secondary-btn btn-sm clear-filter-btn"
            onClick={onClearSearch}
          >
            <RotateCcw size={14} aria-hidden="true" />
            <span>Clear Search</span>
          </button>
        </div>
      ) : (
        /* Normal state: Courses rendered in responsive 2-column grid */
        <div className="course-grid course-list">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              isInterested={interestedCourseIds.includes(course.id)}
              onToggleInterest={onToggleInterest}
              isSelected={course.id === selectedCourseId}
              onSelect={onSelectCourse}
              sharedName={sharedName}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default CourseList;
