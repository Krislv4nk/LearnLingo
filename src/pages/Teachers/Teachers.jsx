
import { Filter } from '../../components/Filter/Filter';
import { TeachersList } from '../../components/TeachersList/TeachersList';
import css from './Teachers.module.css';

const Teachers = () => {
    return (
        <div className={css.pageWrapper}>
    
            <Filter />
            <TeachersList/>
        </div>
    );
};

export default Teachers;