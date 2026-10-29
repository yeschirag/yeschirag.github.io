"use client";

import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddCourseForm from './components/AddCourseForm';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import { Course } from './components/CourseCard';

const INITIAL_COURSES: Course[] = [
  {
    id: 'course-1',
    title: 'Introduction to React',
    category: 'Web Development',
  },
  {
    id: 'course-2',
    title: 'Data Structures and Algorithms',
    category: 'Computer Science',
  },
  {
    id: 'course-3',
    title: 'Database Systems',
    category: 'Databases',
  },
  {
    id: 'course-4',
    title: 'Computer Networks',
    category: 'Networking',
  },
];

export default function FdfedLab3Page() {
  const [courses, setCourses] = useState<Course[]>(INITIAL_COURSES);
  const [interestedCourseIds, setInterestedCourseIds] = useState<string[]>([]);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sharedName, setSharedName] = useState('samira');

  const handleAddCourse = ({ title, category }: { title: string; category: string }) => {
    const newCourse: Course = {
      id: `course-${Date.now()}`,
      title,
      category,
    };
    setCourses((prev) => [newCourse, ...prev]);
  };

  const handleToggleInterest = (courseId: string) => {
    setInterestedCourseIds((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const handleUpdateTitle = (courseId: string, newTitle: string) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === courseId ? { ...course, title: newTitle } : course
      )
    );
  };

  const handleSelectCourse = (courseId: string) => {
    setSelectedCourseId((prev) => (prev === courseId ? null : courseId));
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  // State derivations
  const trimmedSearch = searchTerm.trim();
  const isSourceEmpty = courses.length === 0;

  const filteredCourses = trimmedSearch
    ? courses.filter((course) => course.title.includes(trimmedSearch))
    : courses;

  const hasNoMatches = !isSourceEmpty && filteredCourses.length === 0;

  const selectedCourse = courses.find(
    (course) => course.id === selectedCourseId
  ) || null;

  const isSelectedHidden = Boolean(
    selectedCourse && !filteredCourses.some((c) => c.id === selectedCourseId)
  );

  return (
    <div className="app-container">
      <Header
        sharedName={sharedName}
        onSharedNameChange={setSharedName}
      />

      <main className="main-content workspace-container">
        <div className="catalog-column">
          <CourseList
            courses={filteredCourses}
            isSourceEmpty={isSourceEmpty}
            hasNoMatches={hasNoMatches}
            onClearSearch={handleClearSearch}
            interestedCourseIds={interestedCourseIds}
            onToggleInterest={handleToggleInterest}
            selectedCourseId={selectedCourseId}
            onSelectCourse={handleSelectCourse}
            sharedName={sharedName}
            searchControl={
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
            }
          />
        </div>

        <aside className="utility-rail" aria-label="Course management and details">
          <AddCourseForm
            onAddCourse={handleAddCourse}
            sharedName={sharedName}
          />
          <CourseDetails
            key={selectedCourse ? selectedCourse.id : 'no-selection'}
            course={selectedCourse}
            isSelectedHidden={isSelectedHidden}
            onUpdateTitle={handleUpdateTitle}
            onClose={() => setSelectedCourseId(null)}
            onClearSearch={handleClearSearch}
          />
        </aside>
      </main>
    </div>
  );
}
