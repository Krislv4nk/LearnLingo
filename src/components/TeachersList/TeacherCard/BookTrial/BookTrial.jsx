
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import sprite from '../../../../assets/sprite.svg';
import css from './BookTrial.module.css'


export const BookTrial = ({ onClose, teacher }) => {
    const validationSchema = Yup.object().shape({
        reason: Yup.string().required('Please select your reason for learning English'),
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.string().required('Phone number is required').matches(/^[0-9]{10}$/, 'Invalid phone number')
    });

    const handleSubmit = (values, { setSubmitting }) => {
       
        setSubmitting(false);
    };

    return (
        <div className={css.wrapper}>
            <h3 className={css.title}>Book trial lesson</h3>
            <p className={css.info}>Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.</p>
            <button  type="button" onClick={onClose} className={css.closeBtn}>
                <svg className={css.cross}>
                    <use href={`${sprite}#icon-cross`} />
                </svg>
            </button>
            <div className={css.container}>
                <img className={css.avatar} src={teacher.avatar_url} alt="avatar" />
                <div className={css.nameBox}>
                <p className={css.teacher}>Your teacher</p>
                    <h5 className={css.name}>{teacher.name} {teacher.surname}</h5>
                    </div>
            </div>
            <h4 className={css.goals}>What is your main reason for learning English?</h4>
            <Formik
                initialValues={{
                    reason: '',
                    name: '',
                    email: '',
                    phone: ''
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form>
                        <div className={css.radioWrapper} role="group" aria-labelledby="reason-label">
                            <label htmlFor="reason1" className={css.radioLabel}>
                                <Field type="radio" name="reason" id="reason1" value="reason1" className={css.radio} />
                                <span className={css.customRadio}></span>Career and business</label>
                            
                           <label htmlFor="reason2" className={css.radioLabel}>
                                <Field type="radio" name="reason" id="reason2" value="reason2" className={css.radio} />
                                <span className={css.customRadio}></span>Lesson for kids</label>
                            
                            <label htmlFor="reason3" className={css.radioLabel}>
                                <Field type="radio" name="reason" id="reason3" value="reason3" className={css.radio} />
                                <span className={css.customRadio}></span>Living abroad</label>
                            
                            <label htmlFor="reason4" className={css.radioLabel}>
                                <Field type="radio" name="reason" id="reason4" value="reason4" className={css.radio} />
                                <span className={css.customRadio}></span>Exams and coursework</label>
                            <label htmlFor="reason5" className={css.radioLabel}>
                                
                                <Field type="radio" name="reason" id="reason5" value="reason5" className={css.radio} />
                                <span className={css.customRadio}></span>Culture, travel or hobby</label>
                           
                        </div>
                        {errors.reason && touched.reason ? <div className={css.error}>{errors.reason}</div> : null}

                        <Field type="text" name="name" placeholder="Full Name" className={css.input}/>
                        {errors.name && touched.name ? <div className={css.error}>{errors.name}</div> : null}

                        <Field type="email" name="email" placeholder=" Email" className={css.input}/>
                        {errors.email && touched.email ? <div className={css.error}>{errors.email}</div> : null}

                        <Field type="tel" name="phone" placeholder="Phone number" className={css.input}/>
                        {errors.phone && touched.phone ? <div className={css.error}>{errors.phone}</div> : null}

                        <button className={css.bookBtn} type="submit" disabled={isSubmitting}>Book</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}