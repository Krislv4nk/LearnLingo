
import { useState, useEffect } from 'react';
import { getAllTeachers } from '../../Firebase/Teachers';
import { TeacherCard } from './TeacherCard/TeacherCard';

export const TeachersList = () => {
  const [teachers, setTeachers] = useState([]);
  const [visibleTeachers, setVisibleTeachers] = useState(4);

  useEffect(() => {
    const fetchTeachers = async () => {
      const teachersData = await getAllTeachers();
      setTeachers(teachersData);
    };

    fetchTeachers();
  }, []);

  const loadMoreTeachers = () => {
    setVisibleTeachers(prevVisibleTeachers => prevVisibleTeachers + 4);
  };

  return (
    <div>
      <ul>
        {teachers.slice(0, visibleTeachers).map((teacher, index) => (
            <TeacherCard key={index} teacher={teacher} />
        ))}
      </ul>
      {visibleTeachers < teachers.length && (
        <button type='button' onClick={loadMoreTeachers}>
          Load more
        </button>
      )}
    </div>
  );
};
