import React, { useState } from 'react';
import { Plus, AlertCircle } from 'lucide-react';

interface AddCourseFormProps {
  onAddCourse: (course: { title: string; category: string }) => void;
  sharedName: string;
}

function AddCourseForm({ onAddCourse, sharedName }: AddCourseFormProps) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    const trimmedCategory = category.trim();

    if (!trimmedTitle || !trimmedCategory) {
      setError('Please provide both course title and category.');
      return;
    }

    onAddCourse({
      title: trimmedTitle,
      category: trimmedCategory,
    });

    setTitle('');
    setCategory('');
    setError('');
  };

  return (
    <section className="utility-card add-course-section" aria-labelledby="add-course-heading">
      <div className="utility-card-header">
        <h2 id="add-course-heading" className="utility-title">
          Add New Course
        </h2>
        <div className="form-identity-badge" title="Course will be associated with the active student">
          <span>Adding as <strong className="identity-name">{sharedName}</strong></span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="add-course-form" noValidate>
        <div className="form-fields-stack">
          <div className="form-group">
            <label htmlFor="course-title-input" className="form-label">
              Course Title
            </label>
            <input
              id="course-title-input"
              type="text"
              className="form-input"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (error) setError('');
              }}
              placeholder="e.g. Distributed Systems"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="course-category-input" className="form-label">
              Category
            </label>
            <input
              id="course-category-input"
              type="text"
              className="form-input"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                if (error) setError('');
              }}
              placeholder="e.g. Computer Science"
              required
            />
          </div>
        </div>

        {error && (
          <div className="form-error-banner" role="alert" aria-live="polite">
            <AlertCircle size={15} aria-hidden="true" />
            <p className="form-error">{error}</p>
          </div>
        )}

        <button type="submit" className="primary-btn submit-btn">
          <Plus size={16} aria-hidden="true" />
          <span>Add Course at Top</span>
        </button>
      </form>
    </section>
  );
}

export default AddCourseForm;
