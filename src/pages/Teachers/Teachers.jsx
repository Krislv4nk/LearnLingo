
import { useState } from 'react';
import { Filter } from '../../components/Filter/Filter';
import { TeachersList } from '../../components/TeachersList/TeachersList';
import css from './Teachers.module.css';

const Teachers = () => {
    const [showTeachersList, setShowTeachersList] = useState(true);

    const handleFilterApply = () => {
        setShowTeachersList(false); 
    };

    return (
        <div className={css.pageWrapper}>
            <Filter onApply={handleFilterApply} />
            {showTeachersList && <TeachersList />}
        </div>
    );
};

export default Teachers;